import MongoDatabase from "../../config/db";

function createAggregateQuery(value: string) {
  return [
    {
      $lookup: {
        from: "company",
        localField: "companyId",
        foreignField: "_id",
        as: "company",
      },
    },
    {
      $match: {
        $or: [
          {
            primaryText: {
              $regex: value,
              $options: "i",
            },
          },
          {
            "company.name": {
              $regex: value,
              $options: "i",
            },
          },
          {
            headline: {
              $regex: value,
              $options: "i",
            },
          },
          {
            description: {
              $regex: value,
              $options: "i",
            },
          },
        ],
      },
    },
  ];
}

async function searchAds(searchQuery: string | any) {
  const db = await MongoDatabase.getDb();

  const AGGREGATE_QUERY = createAggregateQuery(searchQuery);

  let ads = await db.collection("ads").aggregate(AGGREGATE_QUERY).toArray();

  return ads;
}

export { searchAds };
