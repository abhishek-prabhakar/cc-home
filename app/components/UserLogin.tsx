import { Form } from "@remix-run/react";
import { Button, Col, Input, Modal, Row, Typography } from "antd";
import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UserService from "~/service/user.service";
const { Title } = Typography;

const UserLogin = {
    Index: ({ title = 'Manage your booking', redirectUrl = '', onSuccess }: { title?: string, redirectUrl?: string, onSuccess?: Function }) => {
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

        return <><Form onSubmit={handleSubmit(startUserLogin)}>
            <Title level={5}>{title}</Title>
            <Row justify={'end'} gutter={[10, 10]}>
                <Col span={24}>
                    <Controller name="phone" control={control} render={({ field }) => <Input prefix="+91" placeholder="Enter your phone number." required {...field} />} />
                </Col>
                <Col span={24}><Button block type="primary" htmlType="submit" loading={isBusy}>Login</Button></Col>
            </Row>
        </Form>
            <UserLogin.VerifyOtp redirectUrl={redirectUrl} username={getUsername} modalOpen={showVerifyUserDialog} onClose={() => toggleVerifyUserDialog(false)} />
        </>
    },
    VerifyOtp: ({ username, redirectUrl, modalOpen, onClose }: { username: number | null | undefined, modalOpen: boolean, redirectUrl?: string, onClose: Function }) => {
        const { control, getValues, handleSubmit } = useForm();
        const [isBusy, setBusy] = useState(false);
        const formRef = useRef<any>(null);
        const formInputIdRef = useRef<any>(null);
        const formInputUrlRef = useRef<any>(null);

        const verifyOtp = () => {
            setBusy(true);
            UserService.VerifyOtp({ phone: username || 0, otp: getValues().otp }).then(r => {

                setBusy(false);
                formInputIdRef.current.value = r.data.token;
                formInputUrlRef.current.value = redirectUrl || '';
                formRef.current.submit();
                // if (onClose) {
                //     onClose();
                // }
            }).catch(e => {
                setBusy(false);
            })
        }

        function closeModal() {
            onClose();
        }

        return <Modal confirmLoading={isBusy} title="Verify OTP" open={modalOpen} onOk={() => verifyOtp()} onCancel={() => onClose()}>
            <Row justify={'end'} gutter={[10, 10]}>
                <Col span={24}>
                    <Controller name="otp" control={control} render={({ field }) => <Input placeholder="- - - -" max={4}  {...field} />} />
                </Col>
            </Row>
            <Form method="post" action="/login/redirect" ref={formRef}>
                <input type="hidden" name="id" ref={formInputIdRef} />
                <input type="hidden" name="redirect" ref={formInputUrlRef} />
            </Form>
        </Modal>
    }
}

export default UserLogin.Index;