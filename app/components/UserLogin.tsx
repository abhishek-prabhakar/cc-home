import { Button, Col, Input, Modal, Row } from "antd";
import { useForm } from "react-hook-form";

export function UserLogin({ modalOpen, onClose }: { modalOpen: boolean, onClose: Function }) {
    const { register, handleSubmit } = useForm();

    function verifyOtp() {
        if (onClose) {
            onClose();
        }
    }

    return <Modal title="Verify OTP" open={modalOpen} onOk={() => verifyOtp()} onCancel={() => onClose()}>
        <Row justify={'end'} gutter={[10, 10]}>
            <Col span={24}>
                <Input placeholder="- - - -" max={4}  {...register('OTP')} />
            </Col>
        </Row>
    </Modal>
}