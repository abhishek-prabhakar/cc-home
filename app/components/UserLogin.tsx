import { Form, useNavigate } from "@remix-run/react";
import { Button, Col, Input, Modal, Row, Typography } from "antd";
import axios from "axios";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { UserLoginInput } from "~/types";
const { Title } = Typography;

const UserLogin = {
    Index: () => {
        const { control, handleSubmit } = useForm();
        const [showVerifyUserDialog, setVerifyUserDialogState] = useState(false);

        function toggleVerifyUserDialog(show = false) {
            setVerifyUserDialogState(show);
        }

        function startUserLogin(params: any) {
            console.log(params)

            axios.post('/login').then(r => {
                toggleVerifyUserDialog(true);
            })
        }

        return <><Form onSubmit={handleSubmit(startUserLogin)}>
            <Title level={5}>Manage your booking</Title>
            <Row justify={'end'} gutter={[10, 10]}>
                <Col span={24}>
                    <Controller name="phone" control={control} render={({ field }) => <Input prefix="+91" placeholder="Enter your phone number." {...field} />} />
                </Col>
                <Col><Button type="primary" htmlType="submit">Login</Button></Col>
            </Row>
        </Form>
            <UserLogin.VerifyOtp modalOpen={showVerifyUserDialog} onClose={() => toggleVerifyUserDialog(false)} />
        </>
    },
    VerifyOtp: ({ modalOpen, onClose }: { modalOpen: boolean, onClose: Function }) => {
        const { register, getValues, handleSubmit } = useForm();
        const navigate = useNavigate();

        function verifyOtp() {
            console.log(getValues)
            axios.post('/verify-otp').then(r => {
                if (onClose) {
                    onClose();
                }

                navigate(`/user/home`);
            })
        }

        return <Modal title="Verify OTP" open={modalOpen} onOk={() => verifyOtp()} onCancel={() => onClose()}>
            <Row justify={'end'} gutter={[10, 10]}>
                <Col span={24}>
                    <Input placeholder="- - - -" max={4}  {...register('OTP')} />
                </Col>
            </Row>
        </Modal>
    }
}

export default UserLogin.Index;