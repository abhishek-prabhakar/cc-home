import { FundOutlined } from "@ant-design/icons";
import { Button, Card, Grid, Group, Image, Input, Modal, Radio, Stack, Text, Title } from "@mantine/core";
import { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { db } from "~/utils/database";
import generateUuid from "~/utils/uuid.generator";

export async function action(args: ActionArgs) {
  const formData = await args.request.formData();
  const fullName = formData.get("fullName")?.toString();
  const socialUrl = formData.get("socialUrl")?.toString();
  const mobileNumber = formData.get("phone")?.toString();
  const email = formData.get("email")?.toString();
  const category = formData.get("category")?.toString();

  if (!fullName || !mobileNumber || !email || !socialUrl || !category) {
    return false;
  }

  try {
    await db.memberRequest.create({
      data: {
        id: generateUuid(),
        fullName,
        email,
        mobileNumber,
        socialUrl,
        category,
      },
    });
  } catch (e) {
    return false;
  }

  return true;
}

export async function loader({ params }: LoaderArgs) {
  return null;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Join as a service professional" },
    { name: "description", content: "Celebria Collective Partner" },
  ];
};

const jumbotronStyle: React.CSSProperties = {
  background:
    "url(https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/slider-slide-2-1920x980.jpg) no-repeat center",
  minHeight: "500px",
  padding: "100px 20px",
  borderRadius: "20px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const VendorList = [
  {
    background: "linear-gradient(180deg, #03DBCB, #047DA6)",
    id: "photographer",
    name: "Photographer",
    title: "Photographer?",
    description:
      "Counting objects: 5, done. Delta compression using up to 4 threads.",
    img: "/assets/vendor-card-1.svg",
  },
  {
    background: "linear-gradient(180deg, #681ACB, #4549E5)",
    id: "video",
    name: "Videographer",
    title: "Videographer?",
    description:
      "Counting objects: 5, done. Delta compression using up to 4 threads.",
    img: "/assets/vendor-card-2.svg",
  },
  {
    background: "linear-gradient(185deg, #AF6316,#C27B15)",
    id: "makep",
    name: "Makeup Artist",
    title: "Makeup?",
    description:
      "Counting objects: 5, done. Delta compression using up to 4 threads.",
    img: "/assets/vendor-card-3.svg",
  },
];

function scroll(elmId: string) {
  setTimeout(function () {
    let element = document.getElementById(elmId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 1000);
}

const PartnerSignup = {
  Index: () => {
    return (
      <div className="container">
        <Stack gap={'lg'}>
          <PartnerSignup.Jumbotron />
          <PartnerSignup.Counter />
          <PartnerSignup.Intro />
          <PartnerSignup.Features />
          <PartnerSignup.Form />
        </Stack>
      </div>
    );
  },
  Jumbotron: () => {
    function buttonClick(e: any) {
      scroll("signup-form");
    }
    return (
      <div style={jumbotronStyle}>
        <Grid justify={"center"}>
          <Grid.Col>
            <Stack align="center" justify="center">
              <Title order={1} style={{ color: "white" }}>
                Earn upto 3 times your current income and change your life.
              </Title>
              <Title order={3}>
                Become a part of a community with more than 50,000 service
                professionals
              </Title>
              <br />
              <br />
              <Button
                variant="filled"
                size="lg"
                radius={'xl'}
                color="white"
                onClick={buttonClick}
              >
                Join Us
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </div>
    );
  },

  Counter: () => {
    return (
      <div style={{ padding: "50px 0" }}>
        <Grid justify={"center"} gutter={40}>
          <Grid.Col>
            <Title>50+</Title>
            <Title order={4}>Members</Title>
          </Grid.Col>
          <Grid.Col>
            <Title>500+</Title>
            <Title order={4}>Customers</Title>
          </Grid.Col>
          <Grid.Col>
            <Title>500+</Title>
            <Title order={4}>Services</Title>
          </Grid.Col>
        </Grid>
      </div>
    );
  },

  Intro: () => {
    return (
      <Grid justify={"center"}>
        <Grid.Col span={6}>
          <div className="line"></div>
        </Grid.Col>
        <Grid.Col span={24}></Grid.Col>
        <Grid.Col className="_text-center" span={{ base: 12, md: 10, lg: 8 }}>
          <div style={{ padding: "50px 0" }}>
            <Title order={2}>
              {" "}
              Lorem ipsum dolor sit amet
            </Title>
            <Text c="dimmed">
              Celebria Collective is more than just a platform; it's a launchpad
              for photographers, makeup artists, videographers, and fashion
              designers looking to scale their business and amplify their
              artistic influence. Ready to elevate your craft and take your
              business to the next level?
            </Text>
          </div>
        </Grid.Col>
      </Grid>
    );
  },

  Features: () => {
    return (
      <div
        className="_rounded"
        style={{ background: "#f8f8f8", padding: "20px" }}
      >
        <Grid justify={"center"} align={"middle"} gutter={40}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://www.christianfarmers.org/media/nwmnklrp/farmers-market.jpg"
              className="_rounded"
              width={"100%"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Title>
            <Grid>
              <Grid.Col>
                <Title style={{ color: "var( --ui-color-primary)" }}>
                  <FundOutlined />
                </Title>
              </Grid.Col>
              <Grid.Col flex={"auto"}>
                <Title order={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Title>
                <Text c="dimmed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </div>
    );
  },

  Form: () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    return (
      <Grid id="signup-form" gutter={40}>
        <Grid.Col span={24}>
          <div style={{ paddingTop: "50px", textAlign: "center" }}>
            <Title order={1}>
              Join us in the following categories
            </Title>
          </div>
        </Grid.Col>
        {VendorList.map((vendor) => (
          <Grid.Col key={vendor.id} span={{ base: 12, lg: 4 }}>
            <Card
              style={{
                background: vendor.background,
                color: "#fff",
                width: "100%",
                borderRadius: "8px",
              }}
            >
              <Card.Section>
                <Image
                  src={vendor.img}
                  style={{ padding: "50px", height: "300px" }}
                />
              </Card.Section>
              <div style={{ marginTop: "-10px" }}>
                <Stack gap={'lg'}>
                  <Title style={{ color: "white" }} order={2}>
                    {vendor.title}
                  </Title>
                  <Title style={{ color: "white" }} order={4}>
                    {vendor.description}
                  </Title>
                  <Button
                    radius={'xl'}
                    variant="filled"
                    size="large"
                    onClick={() => setActiveCard(vendor.id)}
                  >
                    Signup
                  </Button>
                </Stack>
              </div>
            </Card>
          </Grid.Col>
        ))}
        <PartnerSignup.SignupForm
          type={activeCard}
          onClose={() => setActiveCard(null)}
        />
      </Grid>
    );
  },

  SignupForm: ({
    type,
    onClose,
  }: {
    type: string | null;
    onClose: () => void;
  }) => {
    const fetcher = useFetcher();

    const [formSubmitted, setFormSubmitted] = useState(false);

    function customClose() {
      setFormSubmitted(false);
      onClose();
    }

    function submitHandler(e: FormEvent<HTMLFormElement>) {
      // prevent default form submit
      e.preventDefault();

      // get formData from currentTarget (form)
      const formData = new FormData(e.currentTarget);

      // submit formData using fetcher
      fetcher.submit(formData, { method: "POST" });

      setFormSubmitted(true);
    }

    const SuccessMessage = () => {
      return (
        <Stack align="center" justify="center">
          <Title order={3}>Thank you for your interest</Title>
          <Text size="sm">Our representative will contact you soon.</Text>
          <Button key="buy" onClick={customClose}>
            Close
          </Button>
        </Stack>
      );
    };

    const RequestForm = () => {
      return type ? (
        <fetcher.Form onSubmit={submitHandler}>
          <Grid gutter={20}>
            <Grid.Col>
              <Title order={5}>I'm a</Title>
              <Group defaultValue={type}>
                {VendorList.map((item) => (
                  <Radio key={item.id} value={item.id} name="type">
                    {item.name}
                  </Radio>
                ))}
              </Group>
            </Grid.Col>
            <Grid.Col span={24}>
              <Title order={5}>Full Name</Title>
              <Input
                name="fullName"
                placeholder="Enter your full name"
                required
              />
            </Grid.Col>
            <Grid.Col span={24}>
              <Title order={5}>Contact Number</Title>
              <Input name="phone" leftSection="+91" maxLength={10} required />
            </Grid.Col>
            <Grid.Col span={24}>
              <Title order={5}>Email</Title>
              <Input name="email" type="email" required />
            </Grid.Col>
            <Grid.Col span={24}>
              <Title order={5}>Social media url</Title>
              <Input name="socialUrl" type="url" required />
            </Grid.Col>
            <Grid.Col span={24}>
              <input type="hidden" name="category" value={type} />
              <Button variant="filled" radius="xl" type="submit">
                Submit
              </Button>
            </Grid.Col>
          </Grid>
        </fetcher.Form>
      ) : (
        <></>
      );
    };

    return (
      <Modal
        opened={!!type}
        onClose={onClose}
        title="Register as a professional"
      >
        {formSubmitted ? <SuccessMessage /> : <RequestForm />}
      </Modal>
    );
  },
};

export default PartnerSignup.Index;
