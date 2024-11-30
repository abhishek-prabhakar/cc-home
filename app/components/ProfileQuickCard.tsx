import {  Avatar, Badge, Box, Button, Divider, Flex, Grid, Group, Image, Overlay, Rating, Space, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Routes from "~/routes.data";
import VideoPreviewItem from "./VideoPreviewItem";
import { PortfolioItem } from "~/types";
import { PATH } from "~/path.data";
import Currency from "~/utils/currency.transformer";
import classes from './ProfileQuickCard.module.css';

function ProfileQuickCard({ id, name, rating, services, tag, profileImg, portfolio, categoryId, startsFrom }: { id: string, name: string, rating: number, services: string[], portfolio: PortfolioItem[], tag?: string, profileImg: string, categoryId?: string, startsFrom?: number }) {

  const profileUrl = categoryId ? Routes.get('VendorProfileWithService', { id: id, sGrpId: categoryId }) : Routes.get('VendorProfile', { id: id });

  return <Grid pt={'lg'} gutter={0} align="end" className={classes.profileCardStyle}>
    <Grid.Col span={{ base: 12, md: 5 }}>
      <Grid gutter={'md'} align="center">
        <Grid.Col span={{ base: 'content' }}>
          <Link to={profileUrl} >
            <Avatar
              size={'xl'}
              src={profileImg}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 'auto', md: 12 }}>
          <Group gap={'sm'} align="center">
            <Link to={profileUrl}><Title order={4}>{name}</Title></Link>
            {tag && <Badge color="green" size="xs">{tag}</Badge>}
            {rating? [<Box pos="relative" key={0}>
              <Rating defaultValue={rating} fractions={3} readOnly={true} size="sm" />
              <Overlay color="#fff" backgroundOpacity={0} />
            </Box>,
            <Text key={1} c="dimmed">
             (${rating})
            </Text>]:''}
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
      <Space h={'sm'} />
      Starts from <Currency value={startsFrom} />.
    </Grid.Col>
    <Grid.Col span={{ base: 12, md: 'auto' }}>
      <Space h={'md'} />
      <PhotoProvider loop={false}>
        <Flex direction={'column'} gap={'xs'} wrap={'wrap'} mah={'240px'} justify={'end'} align={'end'} style={{ alignContent: 'end' }}>
          {portfolio?.map((imageItem, i) => <Box key={i} style={i === 0 || portfolio.length % 2 == 1 && i < 2 ? { width: '200px', height: '200px' } : { width: '95px', height: '95px' }}>
            {imageItem.type === 'youtube' ? <VideoPreviewItem ytId={imageItem.value} /> :
              <PhotoView src={PATH.RESOURCE_URL + imageItem.value}>
                <Image
                  className={classes.itemDataThumbSetStyles+' cursor-pointer'}
                  src={PATH.THUMB_URL + imageItem.value}
                  alt={'reload to display image'}
                />
              </PhotoView>}
          </Box>)}
          {!portfolio?.length ? [
            <Box key="empty-box-1" w={'95px'} h={'95px'} opacity={0.1}><div className={classes.itemDataThumbSetStyles}></div></Box>,
            <Box key="empty-box-2" w={'95px'} h={'95px'}></Box>,
            <Box key="empty-box-3" w={'95px'} h={'95px'}></Box>,
            <Box key="empty-box-4" w={'95px'} h={'95px'} opacity={0.3}><div  className={classes.itemDataThumbSetStyles}></div></Box>,
            <Box key="empty-box-5" w={'95px'} h={'95px'} opacity={0.2}><div  className={classes.itemDataThumbSetStyles}></div></Box>] : <></>}
          <Link to={profileUrl}>
            <Button className="viewProfileButton" w={'95px'} h={'95px'} variant="outline">
              View<br />Profile
            </Button>
          </Link>
        </Flex>
      </PhotoProvider>
    </Grid.Col>
    <Grid.Col span={12}>
      <Space h={'xl'}/>
            <Divider h={1}/>
    </Grid.Col>
  </Grid>
}

export default ProfileQuickCard;