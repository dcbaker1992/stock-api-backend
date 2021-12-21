module.exports = db => {
    const funds = [
      {
        company: "Apple Inc.",
        open: "1171.55",
        volume: "61,807,020",
        todaysRange: "169.12 - 172.42",
        yearlyRange: "116.21 - 182.13",
        martketCap: "2.825T",
        sector: "Technology",
        industry: "Consumer Electronics",
        headqwarters: "Cupertino, CA"
      },
      {
        company: "Ford Motor Company",
        open: "19.75",
        volume: "49,168,703",
        todaysRange: "19.33 - 19.79",
        yearlyRange: "8.43 - 21.49",
        martketCap: "78.226B",
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        headquarters: "Dearborn, MI 48126"
      },
      {
        company: "Intel Corporation",
        open: "49.94",
        volume: "22,860,610",
        todaysRange: "49.94 - 50.84",
        yearlyRange: "45.77 - 68.49",
        martketCap: "206.247B",
        sector: "Technology",
        industry: "Semiconductors",
        headquarters: "Santa Clara, CA 95054"
      },
      {
        company: "Activision Blizzard",
        open: "62.25",
        volume: "7,325,350",
        todaysRange: "61.87 - 63.48",
        yearlyRange: "56.40 - 104.53",
        martketCap: "49.428B",
        sector: "Communication Services",
        industry: "Electronic Gaming & Multimedia",
        headquarters: "Santa Monica, CA 90405"
      },
      {
        company: "The Boeing Company",
        open: "190.28",
        volume: "9,923,102",
        todaysRange: "190.04 - 199.69",
        yearlyRange: "185.26 - 278.57",
        martketCap: "117.205B",
        sector: "Industrials",
        industry: "Aerospace & Defense",
        headquarters: "Chicago, IL 60606"
      },
      {
        company: "Bank of America",
        open: "43.54",
        volume: "31,829,394",
        todaysRange: "43.54 - 44.48",
        yearlyRange: "29.17 - 48.69",
        martketCap: "361.286B",
        sector: "Finacial Services",
        industry: "Banks-Diversitfied",
        headqwarters: "Charlotte, NC"
      },
      {
        company: "Tesla, Inc.",
        open: "916.87",
        volume: "11,147,893",
        todaysRange: "886.12 - 937.24",
        yearlyRange: "539.49 - 1,243.49",
        martketCap: "938.762B",
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        headqwarters: "Austin, TX"
      },
      {
        company: "Nike Inc.",
        open: "169.69",
        volume: "11,147,893",
        todaysRange: "164.71 - 171.19",
        yearlyRange: "125.44 - 179.10",
        martketCap: "265.035B",
        sector: "Consumer Cyclical",
        industry: "Footwear & Accessories",
        headqwarters: "Beaverton, OR"
      },
      {
        company: "The Coca-Cola Company",
        open: "57.61",
        volume: "10,632,279",
        todaysRange: "57.51 - 57.97",
        yearlyRange: "48.11 - 58.92",
        martketCap: "249.943B",
        sector: "Consumer Defensive",
        industry: "Beverages—Non-Alcoholic",
        headqwarters: "Atlanta, GA"
    },
    {
      company: "Target",
      open: "219.88",
      volume: "2,627,820",
      todaysRange: "216.48 - 220.73",
      yearlyRange: "166.83 - 268.98",
      martketCap: "105.244B",
      sector: "Consumer Defensive",
      industry: "Discount Stores",
      headqwarters: "Minneapolis, MN"
  },
    
  


    ]
  
    funds.forEach(fund => db.funds.insert(fund))
  }
  