import { FundOutlined } from "@ant-design/icons";
import { Blockquote, Button, Card, Container, Divider, Grid, Group, Image, Input, Modal, Overlay, Radio, Stack, Text, Title } from "@mantine/core";
import { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link, useFetcher } from "@remix-run/react";
import { IconQuote } from "@tabler/icons-react";
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
    "url(/assets/patner-signup-banner.webp) no-repeat center",
  minHeight: "500px",
  padding: "100px 20px",
  borderRadius: "20px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: 'cover',
  position: 'relative'
};

const VendorList = [
  {
    background: "linear-gradient(180deg, #03DBCB, #047DA6)",
    id: "photographer",
    name: "Photographer",
    title: "Photographer",
    description:
      "Elevate your lens, amplify your earnings! Join Celebria Collective for exposure and lucrative opportunities",
    img: "/assets/vendor-card-1.svg",
  },
  {
    background: "linear-gradient(180deg, #681ACB, #4549E5)",
    id: "video",
    name: "Videographer",
    title: "Videographer",
    description:
      "Turn your lens into wealth! Join Celebria Collective for exposure and well-paid projects.",
    img: "/assets/vendor-card-2.svg",
  },
  {
    background: "linear-gradient(185deg, #AF6316,#C27B15)",
    id: "makep",
    name: "Makeup Artist",
    title: "Makeup Artist",
    description:
      "Stitch your success story! Join Celebria Collective for global exposure and lucrative collaborations.",
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
      <Container size={'xl'} >
        <Stack gap={'lg'}>
          <PartnerSignup.Jumbotron />
          <PartnerSignup.Counter />
          <PartnerSignup.Intro />
          <PartnerSignup.Features />
          <PartnerSignup.Form />
        </Stack>
      </Container>
    );
  },
  Jumbotron: () => {
    function buttonClick(e: any) {
      scroll("signup-form");
    }
    return (
      <div style={jumbotronStyle}>
        <Overlay
          gradient="linear-gradient(45deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          opacity={0.85}
          p={'100px 20px'}
          zIndex={'auto'}
        >
          <Stack align="center" justify="center" h={'100%'}>
            <Title order={1} style={{ color: "white" }}>
              Earn upto 3 times your current income and change your life.
            </Title>
            <Title order={3} c={'white'}>
              Become a part of a community with more than 100 service
              professionals
            </Title>
            <br />
            <br />
            <Button
              variant="filled"
              size="lg"
              radius={'xl'}
              onClick={buttonClick}
            >
              Join Us
            </Button>
          </Stack>
        </Overlay>
      </div>
    );
  },

  Counter: () => {
    return (
      <div style={{ padding: "50px 0" }}>
        <Grid justify={"center"} gutter={'lg'}>
          <Grid.Col span={{ base: 5, md: 3 }}>
            <Stack justify="center" align="center">
              <Title>100+</Title>
              <Title order={4}>Members</Title>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 5, md: 3 }}>
            <Stack justify="center" align="center">
              <Title>1000+</Title>
              <Title order={4}>Customers</Title>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 5, md: 3 }}>
            <Stack justify="center" align="center">
              <Title>20,000+</Title>
              <Title order={4}>Services</Title>
            </Stack>
          </Grid.Col>
        </Grid>
      </div>
    );
  },

  Intro: () => {
    return (
      <Grid justify={"center"}>
        <Grid.Col span={6}>
          <Divider />
        </Grid.Col>
        <Grid.Col span={12}></Grid.Col>
        <Grid.Col className="_text-center" span={{ base: 12, md: 10, lg: 8 }}>
          <div style={{ padding: "40px 0" }}>
            <Text c="dimmed">
              Celebria Collective is more than just a platform; it's a launchpad for photographers, makeup artists, videographers, and fashion designers looking to scale their business and amplify their artistic influence. Ready to elevate your craft and take your business to the next level?
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
        <Grid justify={"center"} align={"center"} gutter={40}>
          <Grid.Col span={{ base: 5, md: 3 }}>
            <Image
              src="/assets/partner-signup-profile.jpg"
              className="_rounded"
              width={"100%"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Blockquote color="gray" cite="– Rahul" icon={<IconQuote />} mt="xl">
              As a photographer with Celebria Collective, I've had the pleasure of working on several projects through their platform. Thanks to their professionalism and diverse range of brand collaborations, coupled with clear communication, a prompt billing process, and an unwavering focus on client satisfaction, Celebria Collective stands out as an exceptional platform for creative professionals seeking new opportunities. Highly recommended!
            </Blockquote>
          </Grid.Col>
        </Grid>
      </div>
    );
  },

  Form: () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    return (
      <Grid id="signup-form" gutter={40}>
        <Grid.Col span={12}>
          <div style={{ paddingTop: "50px", textAlign: "center" }}>
            <Title order={2}>
              Join us at Celebria Collective and<br />transform artistry into opportunity!
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
              <div style={{ marginTop: "-10px", color: "white" }}>
                <Stack gap={'lg'} align="center">
                  <Title order={4}>
                    {vendor.title}
                  </Title>
                  <Text ta={'center'} fw={500}>
                    {vendor.description}
                  </Text>
                  <Link to="onboard">
                    <Button
                      radius={'xl'}
                      variant="filled"
                      size="large"
                    >
                      Signup
                    </Button>
                  </Link>
                </Stack>
              </div>
            </Card>
          </Grid.Col>
        ))}
        <Modal
          opened={!!activeCard}
          onClose={() => setActiveCard(null)}
          title="Register as a professional"
        >
          {activeCard && <PartnerSignup.SignupForm
            type={activeCard}
            onClose={() => setActiveCard(null)}
          />}
        </Modal>
      </Grid>
    );
  },
  SignupForm: ({
    type,
    onClose,
  }: {
    type: string;
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
      // const formData = new FormData(e.currentTarget);

      // submit formData using fetcher
      // fetcher.submit(formData, { method: "POST" });

      setFormSubmitted(true);
    }


    return formSubmitted ? <Stack align="center" justify="center">
      <Title order={3}>Thank you for your interest</Title>
      <Text size="sm">Our representative will contact you soon.</Text>
      <Button key="buy" onClick={customClose}>
        Close
      </Button>
    </Stack> : <fetcher.Form method="post" onSubmit={submitHandler}>
      <Grid gutter={'md'}>
        <Grid.Col>
          <Title order={5}>I'm a</Title>
          <Group defaultValue={type || ''}>
            {VendorList.map((item) => (
              <Radio key={item.id} value={item.id} name="type" label={item.name} />
            ))}
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <Input.Wrapper label="Full Name">
            <Input
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Input.Wrapper label="Contact Number">
            <Input name="phone" leftSection="+91" maxLength={10} required />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Input.Wrapper label="Email">
            <Input name="email" type="email" required />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={12}>
          <Input.Wrapper label="Social media url">
            <Input name="socialUrl" type="url" required />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={12}>
          <input type="hidden" name="category" value={type || ''} />
          <Button variant="filled" radius="xl" type="submit">
            Submit
          </Button>
        </Grid.Col>
      </Grid>
    </fetcher.Form>;
  },
};

export default PartnerSignup.Index;
