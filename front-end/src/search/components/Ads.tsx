import { Grid, GridItem, Text, Stack, Divider } from "@chakra-ui/react";

function Ad({ primaryText, headline, imageUrl, description, company }: any) {
  return (
    <GridItem
      h="full"
      w="100%"
      padding="5"
      maxH="fit-content"
      maxW="fit-content"
      bg="blue.500"
    >
      <Stack justifyContent="space-between" flexDirection="column">
        <Text>{headline}</Text>
        <Divider />
        <Text>{primaryText}</Text>
        <Divider />
        <Text>{company.name}</Text>
        {description && (
          <>
            <Divider />
            <Text>{description}</Text>
          </>
        )}
      </Stack>
    </GridItem>
  );
}

function Ads({ ads }: any) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      {ads.map((ad: any) => {
        return <Ad key={ad._id} {...ad} company={ad.company[0]} />;
      })}
    </Grid>
  );
}

export default Ads;
