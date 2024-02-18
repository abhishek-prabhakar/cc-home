import { Avatar, Badge, Box, Button, Flex, Grid, Group, Image, Rating, Space, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Routes from "~/routes.data";

const itemDataThumbSetStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "4px",
  background: '#808080'
};

function ProfileQuickCard({ id, name, rating, services, tag, profileImg, portfolio, categoryId }: { id: string, name: string, rating: number, services: string[], portfolio: string[], tag?: string, profileImg: string, categoryId?: string }) {

  function url() {
    return categoryId ? Routes.VendorProfileWithService.replace(':id', id).replace(':sGrpId', categoryId) : Routes.VendorProfile.replace(':id', id);
  }

  return <Grid gutter={0} align="end">
    <Grid.Col span={{ base: 12, md: 6 }}>
      <Grid gutter={'md'} align="center">
        <Grid.Col span={{ base: 'content' }}>
          <Link to={url()}>
            <Avatar
              size={'xl'}
              src={profileImg}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 'auto', md: 12 }}>
          <Group gap={'sm'} align="center">
            <Title order={4}>{name}</Title>
            {tag && <Badge color="green" size="xs">{tag}</Badge>}
          </Group>
          <Group gap={'sm'}>
            <Rating defaultValue={rating} fractions={3} readOnly size="sm" />
            <Text c="dimmed">
              (23 Reviews)
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
      <Space h={'sm'} />
      {services?.length > 0 && (
        <Flex gap={'xs'} wrap={'wrap'} align={'center'}>
          {services.map((x, index) => (
            <Badge variant="light" key={"tag" + index} color="gray" size="xs">{x}</Badge>
          ))}{" "}
        </Flex>
      )}
    </Grid.Col>
    <Grid.Col span={{ base: 12, md: 'auto' }}>
      <Space h={'md'} />
      <PhotoProvider>
        <Flex direction={'column'} gap={'xs'} wrap={'wrap'} mah={'240px'} justify={'end'} align={'end'} style={{ alignContent: 'end' }}>
          {portfolio?.map((imageItem, i) => <Box style={i === 0 || portfolio.length % 2 == 1 && i < 2 ? { width: '200px', height: '200px' } : { width: '95px', height: '95px' }}>
            <PhotoView src={imageItem}>
              <Image
                className="cursor-pointer"
                style={itemDataThumbSetStyles}
                src={imageItem}
                alt={'reload to display image'}
              />
            </PhotoView>
          </Box>)}
          {!portfolio?.length ? [
            <Box key="empty-box-1" w={'95px'} h={'95px'} opacity={0.1}><div style={itemDataThumbSetStyles}></div></Box>,
            <Box key="empty-box-2" w={'95px'} h={'95px'}></Box>,
            <Box key="empty-box-3" w={'95px'} h={'95px'}></Box>,
            <Box key="empty-box-4" w={'95px'} h={'95px'} opacity={0.3}><div style={itemDataThumbSetStyles}></div></Box>,
            <Box key="empty-box-5" w={'95px'} h={'95px'} opacity={0.2}><div style={itemDataThumbSetStyles}></div></Box>] : <></>}
          <Link to={url()}>
            <Button w={'95px'} h={'95px'} variant="outline">
              View<br />Profile
            </Button>
          </Link>
        </Flex>
      </PhotoProvider>
    </Grid.Col>
  </Grid>
}

export default ProfileQuickCard;