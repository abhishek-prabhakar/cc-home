import { Button, Grid, Input, Modal, Stack, Title } from "@mantine/core";
import { Form, useFetcher } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UserService from "~/service/user.service";

const UserLogin = {
    Index: ({ title = 'Manage your booking', redirectUrl = '', onSuccess, inlineMode }: { title?: string, redirectUrl?: string, onSuccess?: Function, inlineMode?: boolean }) => {
        const { control, handleSubmit } = useForm();
        const [showVerifyUserDialog, setVerifyUserDialogState] = useState(false);
        const [isBusy, setBusy] = useState(false);
        const [getUsername, setUsername] = useState<number>();

        function toggleVerifyUserDialog(show = false) {
            setVerifyUserDialogState(show);

            if (!show && onSuccess) {
                onSuccess();
            }
        }

        function startUserLogin(params: any) {
            setBusy(true);
            UserService.Login({ phone: params.phone }).then(r => {
                if (r.data.success) {
                    toggleVerifyUserDialog(true);
                    setUsername(params.phone);
                }
                setBusy(false);
            }).catch(e => {
                setBusy(false);
            })
        }

        return <>{inlineMode && showVerifyUserDialog ? '' : <Form onSubmit={handleSubmit(startUserLogin)}>
            <Stack>
                <Title order={5}>{title}</Title>
                <Controller name="phone" control={control} render={({ field }) => <Input leftSection="+91" placeholder="Enter your phone number." required {...field} />} />
                <Button variant="filled" type="submit" loading={isBusy}>Login</Button>
            </Stack>
        </Form>}
            <UserLogin.VerifyOtp redirectUrl={redirectUrl} username={getUsername} modalOpen={showVerifyUserDialog} onClose={() => toggleVerifyUserDialog(false)} inlineMode={inlineMode || false} />
        </>
    },
    VerifyOtp: ({ username, redirectUrl, modalOpen, onClose, inlineMode }: { username: number | null | undefined, modalOpen: boolean, redirectUrl?: string, onClose: Function, inlineMode: boolean }) => {
        const { control, getValues, handleSubmit } = useForm();
        const fetcher = useFetcher();

        useEffect(() => {
            if (fetcher.data?.success) {
                onClose();
            }

            if (fetcher.data?.success === false){
                alert('Invalid otp.')
            }
        }, [fetcher.data])

        const verifyOtp = () => {
            fetcher.submit({
                phone: username || 0,
                otp: getValues().otp,
                redirectUrl: redirectUrl || ''
            }, {
                method: 'post',
                action: '/verify-otp'
            });
        }


        function FormBody() {
            return <form onSubmit={e => e?.preventDefault()}><Stack gap={'md'}>
                <Input.Wrapper label="Enter OTP">
                    <Controller name="otp" control={control} render={({ field }) => <Input placeholder="- - - -" max={4} required  {...field} />} />
                </Input.Wrapper>
                <Button type="submit" variant="filled" loading={['submitting', 'loading'].includes(fetcher.state)} onClick={verifyOtp}>Continue</Button>
            </Stack></form>;
        }

        return inlineMode && modalOpen ? <FormBody /> : <Modal title="Verify OTP" opened={modalOpen} onClose={() => onClose()} centered>
            <FormBody />
        </Modal>;
    }
}

export default UserLogin.Index;