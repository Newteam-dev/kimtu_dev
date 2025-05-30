/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: async (userData: any) => await register(userData),
    });
    const handleSubmit = async (values: any) => {
        mutate(values, {
            onSuccess: () => {
                messageApi.success("Register successfully");
                navigate("/login");
            },
            onError: () => messageApi.error("Error register"),
        });
    };
    return (
        <div>
            <Title level={2}>Register</Title>
            <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please input the title of the task!" },
                        {
                            type: "email",
                            message: "Please enter a valid email address",
                        },
                    ]}
                >
                    <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input the due date of the task!" }]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </div>
    );
};

export default Register;
