const careOutcomeTrends = {
    sdkVersionId: "a3497b8a-0cab-4a1c-ac7d-52a4f5e9633c",
    groupBy: "DAY",
    from: "2025-05-15T12:25:47.038Z",
    to: "2025-11-15T12:25:47.038Z",
    series: [
      {
        field: "teethAnalyzed",
        agg: "AVG",
        points: [
          {
            t: 1,
            v: 12,
            n: 1,
          },
          {
            t: 2,
            v: 11,
            n: 1,
          },
          {
            t: 3,
            v: 11,
            n: 2,
          },
        ],
      },
      {
        field: "teethWithTartar",
        agg: "AVG",
        points: [
          {
            t: 1,
            v: 2,
            n: 1,
          },
          {
            t: 2,
            v: 0,
            n: 1,
          },
          {
            t: 3,
            v: 0,
            n: 2,
          },
        ],
      },
      {
        field: "gumInflammationAreas",
        agg: "AVG",
        points: [
          {
            t: 1,
            v: 4,
            n: 1,
          },
          {
            t: 2,
            v: 2,
            n: 1,
          },
          {
            t: 3,
            v: 2,
            n: 2,
          },
        ],
      },
    ],
  };
  
  const result = [
    {
      date: 1,
      teethAnalyzed: 12,
      teethWithTartar: 2,
      gumInflammationAreas: 4,
    },
    {
      date: 2,
      teethAnalyzed: 11,
      teethWithTartar: 0,
      gumInflammationAreas: 2,
    },
    {
      date: 3,
      teethAnalyzed: 11,
      teethWithTartar: 0,
      gumInflammationAreas: 2,
    },
  ];
  
  const getAllFields = (data, index) => {
    return data.series.reduce((acc, curr) => {
      acc[curr.field] = curr.points[index].v;
      return acc;
    }, {});
  };
  
  const transformGraphData = (data) => {
    const result = data.series[0].points.map((point, index) => {
      return {
        date: point.t,
        ...getAllFields(data, index),
      };
    });
    return result;
  };
  console.log(transformGraphData(careOutcomeTrends));
  
  