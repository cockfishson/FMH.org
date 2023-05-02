const teams = [
        {
          name: "Arsenal",
          country: "England",
          league: "Premier League",
          city: "London",
          stadium: "Emirates Stadium",
          capacity: 60260,
          founded: 1886
        },
        {
          name: "Aston Villa",
          country: "England",
          league: "Premier League",
          city: "Birmingham",
          stadium: "Villa Park",
          capacity: 42788,
          founded: 1874
        },
        {
          name: "Brentford",
          country: "England",
          league: "Premier League",
          city: "London",
          stadium: "Brentford Community Stadium",
          capacity: 17300,
          founded: 1889
        },
        {
            name: "Brighton & Hove Albion",
            country: "England",
            league: "Premier League",
            city: "Brighton",
            stadium: "Falmer Stadium",
            capacity: 30750,
            founded: 1901
          },
          {
            name: "Nottingham Forest",
            country: "England",
            league: "Premier League",
            city: "Burnley",
            stadium: "City Grounf",
            capacity: 30332,
            founded: 1865
          },
          {
            name: "Chelsea",
            country: "England",
            league: "Premier League",
            city: "London",
            stadium: "Stamford Bridge",
            capacity: 40853,
            founded: 1905
          },
          {
            name: "Crystal Palace",
            country: "England",
            league: "Premier League",
            city: "London",
            stadium: "Selhurst Park",
            capacity: 25486,
            founded: 1905
          },
          {
            name: "Everton",
            country: "England",
            league: "Premier League",
            city: "Liverpool",
            stadium: "Goodison Park",
            capacity: 39571,
            founded: 1878
          },
          {
            name: "Leeds United",
            country: "England",
            league: "Premier League",
            city: "Leeds",
            stadium: "Elland Road",
            capacity: 37916,
            founded: 1919
          },
          {
            name: "Leicester City",
            country: "England",
            league: "Premier League",
            city: "Leicester",
            stadium: "King Power Stadium",
            capacity: 32262,
            founded: 1884
          },
          {
            name: "Liverpool",
            country: "England",
            league: "Premier League",
            city: "Liverpool",
            stadium: "Anfield",
            capacity: 53394,
            founded: 1892
          },
          {
            name: "Manchester City",
            country: "England",
            league: "Premier League",
            city: "Manchester",
            stadium: "Etihad Stadium",
            capacity: 55017,
            founded: 1880
          },
          {
            name: "Manchester United",
            country: "England",
            league: "Premier League",
            city: "Manchester",
            stadium: "Old Trafford",
            capacity: 74641,
            founded: 1878
          },
        {
          name: "Newcastle United",
          country: "England",
          league: "Premier League",
          city: "Newcastle upon Tyne",
          stadium: "St. James' Park",
          capacity: 52338,
          founded: 1892
        },
        {
          name: "AFC Bournemouth",
          country: "England",
          league: "Premier League",
          city: "Bournemouth",
          stadium: "Carrow Road",
          capacity: 11379,
          founded: 1899
        },
        {
          name: "Southampton",
          country: "England",
          league: "Premier League",
          city: "Southampton",
          stadium: "St. Mary's Stadium",
          capacity: 32384,
          founded: 1885
        },
        {
          name: "Tottenham Hotspur",
          country: "England",
          league: "Premier League",
          city: "London",
          stadium: "Tottenham Hotspur Stadium",
          capacity: 62802,
          founded: 1882
        },
        {
          name: "Fulham",
          country: "England",
          league: "Premier League",
          city: "London",
          stadium: "Craven Cottage",
          capacity: 25700,
          founded: 1879
        },
        {
          name: "West Ham United",
          country: "England",
          league: "Premier League",
          city: "London",
          stadium: "London Stadium",
          capacity: 60000,
          founded: 1895
        },
        {
          name: "Wolverhampton Wanderers",
          country: "England",
          league: "Premier League",
          city: "Wolverhampton",
          stadium: "Molineux Stadium",
          capacity: 31700,
          founded: 1877
        },
        {
            name: "Barnsley",
            country: "England",
            league: "Championship",
            city: "Barnsley",
            stadium: "Oakwell",
            capacity: 23009,
            founded: 1887
          },
          {
            name: "Birmingham City",
            country: "England",
            league: "Championship",
            city: "Birmingham",
            stadium: "St Andrew's Trillion Trophy Stadium",
            capacity: 30016,
            founded: 1875
          },
          {
            name: "Blackburn Rovers",
            country: "England",
            league: "Championship",
            city: "Blackburn",
            stadium: "Ewood Park",
            capacity: 31367,
            founded: 1875
          },
          {
            name: "Blackpool",
            country: "England",
            league: "Championship",
            city: "Blackpool",
            stadium: "Bloomfield Road",
            capacity: 17338,
            founded: 1887
          },
          {
            name: "Watford",
            country: "England",
            league: "Premier League",
            city: "Watford",
            stadium: "Vicarage Road",
            capacity: 22200,
            founded: 1881
          },
          {
            name: "Bristol City",
            country: "England",
            league: "Championship",
            city: "Bristol",
            stadium: "Ashton Gate Stadium",
            capacity: 27500,
            founded: 1894
          },
          {
            name: "Cardiff City",
            country: "Wales",
            league: "Championship",
            city: "Cardiff",
            stadium: "Cardiff City Stadium",
            capacity: 33280,
            founded: 1899
          },
          {
            name: "Coventry City",
            country: "England",
            league: "Championship",
            city: "Coventry",
            stadium: "Coventry Building Society Arena",
            capacity: 32000,
            founded: 1883
          },
          {
            name: "Derby County",
            country: "England",
            league: "Championship",
            city: "Derby",
            stadium: "Pride Park Stadium",
            capacity: 33597,
            founded: 1884
          },
          {
            name: "Norwich City",
            country: "England",
            league: "Premier League",
            city: "Norwich",
            stadium: "Carrow Road",
            capacity: 27033,
            founded: 1902
          },
          {
            name: "Huddersfield Town",
            country: "England",
            league: "Championship",
            city: "Huddersfield",
            stadium: "John Smith's Stadium",
            capacity: 24500,
            founded: 1908
          },
          {
            name: "Hull City",
            country: "England",
            league: "Championship",
            city: "Hull",
            stadium: "KCOM Stadium",
            capacity: 25282,
            founded: 1904
          },
          {
            name: "Luton Town",
            country: "England",
            league: "Championship",
            city: "Luton",
            stadium: "Kenilworth Road",
            capacity: 10226,
            founded: 1885
          },
          {
            name: "Middlesbrough",
            country: "England",
            league: "Championship",
            city: "Middlesbrough",
            stadium: "Riverside Stadium",
            capacity: 34742,
            founded: 1876
          },
          {
            name: "Millwall",
            country: "England",
            league: "Championship",
            city: "London",
            stadium: "The Den",
            capacity: 20146,
            founded: 1885
          },
          {
            name: "Burnley",
            country: "England",
            league: "Premier League",
            city: "Burnley",
            stadium: "Turf Moor",
            capacity: 21401,
            founded: 1882
          },
          {
            name: "Peterborough United",
            country: "England",
            league: "Championship",
            city: "Peterborough",
            stadium: "Weston Homes Stadium",
            capacity: 15317,
            founded: 1934
          },
          {
            name: "Preston North End",
            country: "England",
            league: "Championship",
            city: "Preston",
            stadium: "Deepdale",
            capacity: 23408,
            founded: 1880
          },
          {
            name: "Queens Park Rangers",
            country: "England",
            league: "Championship",
            city: "London",
            stadium: "Kiyan Prince Foundation Stadium",
            capacity: 18344,
            founded: 1882
          },
          {
            name: "Reading",
            country: "England",
            league: "Championship",
            city: "Reading",
            stadium: "Madejski Stadium",
            capacity: 24161,
            founded: 1871
          },
          {
            name: "Sheffield United",
            country: "England",
            league: "Championship",
            city: "Sheffield",
            stadium: "Bramall Lane",
            capacity: 32702,
            founded: 1889
          },
          {
            name: "Stoke City",
            country: "England",
            league: "Championship",
            city: "Stoke-on-Trent",
            stadium: "bet365 Stadium",
            capacity: 30789,
            founded: 1863
          },
          {
            name: "Swansea City",
            country: "Wales",
            league: "Championship",
            city: "Swansea",
            stadium: "Liberty Stadium",
            capacity: 21088,
            founded: 1912
          },
          {
            name: "West Bromwich Albion",
            country: "England",
            league: "Championship",
            city: "West Bromwich",
            stadium: "The Hawthorns",
            capacity: 26688,
            founded: 1878
          },
          {
            name: "Angers SCO",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Angers",
            stadium: "Stade Raymond-Kopa",
            capacity: 18756,
            founded: 1919
          },
          {
            name: "AS Monaco",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Monaco",
            stadium: "Stade Louis II",
            capacity: 18523,
            founded: 1924
          },
          {
            name: "AS Saint-Etienne",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Saint-Etienne",
            stadium: "Stade Geoffroy-Guichard",
            capacity: 41896,
            founded: 1919
          },
          {
            name: "FC Girondins de Bordeaux",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Bordeaux",
            stadium: "Stade Matmut Atlantique",
            capacity: 42115,
            founded: 1881
          },
          {
            name: "FC Lorient",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Lorient",
            stadium: "Stade Yves Allainmat - Le Moustoir",
            capacity: 18054,
            founded: 1926
          },
          {
            name: "LOSC Lille",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Lille",
            stadium: "Stade Pierre-Mauroy",
            capacity: 50009,
            founded: 1944
          },
          {
            name: "Montpellier Hérault SC",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Montpellier",
            stadium: "Stade de la Mosson",
            capacity: 32939,
            founded: 1919
          },
          {
            name: "Nantes",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Nantes",
            stadium: "Stade de la Beaujoire",
            capacity: 38285,
            founded: 1943
          },
          {
            name: "OGC Nice",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Nice",
            stadium: "Allianz Riviera",
            capacity: 35624,
            founded: 1904
          },
          {
            name: "Olympique Lyonnais",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Lyon",
            stadium: "Groupama Stadium",
            capacity: 59186,
            founded: 1950
          },
          {
            name: "Olympique de Marseille",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Marseille",
            stadium: "Orange Vélodrome",
            capacity: 67394,
            founded: 1899
          },
          {
            name: "Paris Saint-Germain FC",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Paris",
            stadium: "Parc des Princes",
            capacity: 47929,
            founded: 1970
          },
          {
            name: "RC Lens",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Lens",
            stadium: "Stade Bollaert-Delelis",
            capacity: 38322,
            founded: 1906
          },
          {
            name: "RC Strasbourg Alsace",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Strasbourg",
            stadium: "Stade de la Meinau",
            capacity: 26745,
            founded: 1906
          },
          {
            name: "Stade Brestois 29",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Brest",
            stadium: "Stade Francis-Le Blé",
            capacity: 15_097,
            founded: 1950,
          },
          {
            name: "Stade de Reims",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Reims",
            stadium: "Stade Auguste-Delaune",
            capacity: 21_628,
            founded: 1910,
          },
          {
            name: "Stade Rennais FC",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Rennes",
            stadium: "Roazhon Park",
            capacity: 29_778,
            founded: 1901,
          },
          {
            name: "FC Metz",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Metz",
            stadium: "Stade Saint-Symphorien",
            capacity: 26167,
            founded: 1932
          },
          {
            name: "AJ Auxerre",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Auxerre",
            stadium: "Stade de l'Abbé-Deschamps",
            capacity: 16752,
            founded: 1905,
          },
          {
            name: "Amiens SC",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Amiens",
            stadium: "Stade Crédit Agricole la Licorne",
            capacity: 12097,
            founded: 1901,
          },
          {
            name: "AS Nancy-Lorraine",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Nancy",
            stadium: "Stade Marcel-Picot",
            capacity: 20500,
            founded: 1967,
          },
          {
            name: "AS Saint-Étienne",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Saint-Étienne",
            stadium: "Stade Geoffroy-Guichard",
            capacity: 35616,
            founded: 1919,
          },
          {
            name: "Chamois Niortais FC",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Niort",
            stadium: "Stade René Gaillard",
            capacity: 10898,
            founded: 1925,
          },
          {
            name: "EA Guingamp",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Guingamp",
            stadium: "Stade de Roudourou",
            capacity: 19000,
            founded: 1912,
          },
          {
            name: "FC Bastia-Borgo",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Borgo",
            stadium: "Stade Armand Cesari",
            capacity: 4256,
            founded: 1920,
          },
          {
            name: "FC Chambly Oise",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Chambly",
            stadium: "Stade des Marais",
            capacity: 5000,
            founded: 1989,
          },
          {
            name: "FC Lorient",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Lorient",
            stadium: "Stade du Moustoir",
            capacity: 18542,
            founded: 1926,
          },
          {
            name: "Grenoble Foot 38",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Grenoble",
            stadium: "Stade des Alpes",
            capacity: 20068,
            founded: 1892,
          },
          {
            name: "Le Havre AC",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Le Havre",
            stadium: "Stade Océane",
            capacity: 25178,
            founded: 1872,
          },
          {
            name: "ASOA Valence",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Valence",
            stadium: "Stade Georges Pompidou",
            capacity: 12_000,
            founded: 1906
          },
          {
            name: "Dijon FCO",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Dijon",
            stadium: "Stade Gaston Gérard",
            capacity: 16_098,
            founded: 1998
          },
          {
            name: "Paris FC",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Paris",
            stadium: "Stade Charléty",
            capacity: 20_000,
            founded: 1969
          },
          {
            name: "Pau FC",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Pau",
            stadium: "Stade du Hameau",
            capacity: 13_966,
            founded: 1920
          },
          {
            name: "Quevilly-Rouen Métropole",
            country: "France",
            league: "Ligue 2 BKT",
            city: "Rouen",
            stadium: "Stade Robert Diochon",
            capacity: 12_018,
            founded: 1902
          },
          {
            name: "Toulouse Football Club",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Toulouse ",
            stadium: "Stadium de Toulouse",
            capacity: 33151,
            founded: 1970
          },
          {
            name: "Athletic Club Aiacciu",
            country: "France",
            league: "Ligue 1 Uber Eats",
            city: "Ajaccio",
            stadium: "Stade François Coty",
            capacity: 10446,
            founded: 1910
          },
          {
            name: "Athletic Club",
            country: "Spain",
            league: "La Liga Santander",
            city: "Bilbao",
            stadium: "San Mamés",
            capacity: 53289,
            founded: 1898
          },
          {
            name: "Atlético Madrid",
            country: "Spain",
            league: "La Liga Santander",
            city: "Madrid",
            stadium: "Wanda Metropolitano",
            capacity: 68000,
            founded: 1903
          },
          {
            name: "FC Barcelona",
            country: "Spain",
            league: "La Liga Santander",
            city: "Barcelona",
            stadium: "Camp Nou",
            capacity: 99354,
            founded: 1899
          },
          {
            name: "Cádiz",
            country: "Spain",
            league: "La Liga Santander",
            city: "Cádiz",
            stadium: "Ramón de Carranza",
            capacity: 25000,
            founded: 1910
          },
          {
            name: "Celta Vigo",
            country: "Spain",
            league: "La Liga Santander",
            city: "Vigo",
            stadium: "Abanca-Balaídos",
            capacity: 29000,
            founded: 1923
          },
          {
            name: "Elche",
            country: "Spain",
            league: "La Liga Santander",
            city: "Elche",
            stadium: "Estadio Manuel Martínez Valero",
            capacity: 33000,
            founded: 1923
          },
          {
            name: "Espanyol",
            country: "Spain",
            league: "La Liga Santander",
            city: "Barcelona",
            stadium: "RCDE Stadium",
            capacity: 40500,
            founded: 1900
          },
          {
            name: "Getafe",
            country: "Spain",
            league: "La Liga Santander",
            city: "Getafe",
            stadium: "Coliseum Alfonso Pérez",
            capacity: 17393,
            founded: 1946
          },
          {
            name: "Granada",
            country: "Spain",
            league: "La Liga Smartbank",
            city: "Granada",
            stadium: "Nuevo Los Cármenes",
            capacity: 19300,
            founded: 1931
          },
          {
            name: "Levante",
            country: "Spain",
            league: "La Liga Smartbank",
            city: "Valencia",
            stadium: "Ciutat de València",
            capacity: 26400,
            founded: 1909
          },
          {
            name: "Mallorca",
            country: "Spain",
            league: "La Liga Santander",
            city: "Palma de Mallorca",
            stadium: "Son Moix",
            capacity: 23100,
            founded: 1916
          },
          {
            name: "Osasuna",
            country: "Spain",
            league: "La Liga Santander",
            city: "Pamplona",
            stadium: "El Sadar",
            capacity: 19800,
            founded: 1920
          },
          {
            name: "Real Betis",
            country: "Spain",
            league: "La Liga Santander",
            city: "Seville",
            stadium: "Benito Villamarin",
            capacity: 60721,
            founded: 1907
          },
          {
            name: "Real Madrid",
            country: "Spain",
            league: "La Liga Santander",
            city: "Madrid",
            stadium: "Santiago Bernabeu",
            capacity: 81044,
            founded: 1902
          },
          {
            name: "Real Sociedad",
            country: "Spain",
            league: "La Liga Santander",
            city: "San Sebastian",
            stadium: "Anoeta",
            capacity: 39500,
            founded: 1909
          },
          {
            name: "Real Valladolid",
            country: "Spain",
            league: "La Liga Santander",
            city: "Valladolid",
            stadium: "Jose Zorrilla",
            capacity: 26512,
            founded: 1928
          },
          {
            name: "Sevilla FC",
            country: "Spain",
            league: "La Liga Santander",
            city: "Seville",
            stadium: "Ramon Sanchez-Pizjuan",
            capacity: 43714,
            founded: 1890
          },
          {
            name: "Valencia CF",
            country: "Spain",
            league: "La Liga Santander",
            city: "Valencia",
            stadium: "Mestalla",
            capacity: 55000,
            founded: 1919
          },
          {
            name: "Villarreal CF",
            country: "Spain",
            league: "La Liga Santander",
            city: "Villarreal",
            stadium: "Estadio de la Ceramica",
            capacity: 23500,
            founded: 1923
          },
          {
            name: "Rayo Vallecano",
            country: "Spain",
            league: "La Liga Smartbank",
            city: "Madrid",
            stadium: "Estadio de Vallecas",
            capacity: 14708,
            founded: 1976
          },
          {
            name: "Albacete Balompié",
            country: "Spain",
            league: "Segunda División",
            city: "Albacete",
            stadium: "Estadio Carlos Belmonte",
            capacity: 18250,
            founded: 1940
          },
          {
            name: "UD Almería",
            country: "Spain",
            league: "Segunda División",
            city: "Almería",
            stadium: "Estadio de los Juegos Mediterráneos",
            capacity: 15500,
            founded: 1989
          },
          {
            name: "FC Cartagena",
            country: "Spain",
            league: "Segunda División",
            city: "Cartagena",
            stadium: "Estadio Municipal Cartagonova",
            capacity: 15500,
            founded: 1995
          },
          {
            name: "CD Castellón",
            country: "Spain",
            league: "Segunda División",
            city: "Castellón de la Plana",
            stadium: "Estadio Nuevo Castalia",
            capacity: 17000,
            founded: 1922
          },
          {
            name: "Celta de Vigo B",
            country: "Spain",
            league: "Segunda División",
            city: "Vigo",
            stadium: "Estadio Barreiro",
            capacity: 4000,
            founded: 1923
          },
          {
            name: "Córdoba CF",
            country: "Spain",
            league: "Segunda División",
            city: "Córdoba",
            stadium: "Estadio Nuevo Arcángel",
            capacity: 21000,
            founded: 1954
          },
          {
            name: "Deportivo Alavés",
            country: "Spain",
            league: "Segunda División",
            city: "Vitoria-Gasteiz",
            stadium: "Estadio Mendizorroza",
            capacity: 19840,
            founded: 1921
          },
          {
            name: "SD Eibar",
            country: "Spain",
            league: "Segunda División",
            city: "Eibar",
            stadium: "Estadio Municipal de Ipurua",
            capacity: 7634,
            founded: 1940
          },
          {
            name: "Girona FC",
            country: "Spain",
            league: "Segunda División",
            city: "Girona",
            stadium: "Estadi Montilivi",
            capacity: 12900,
            founded: 1930
          },
          {
            name: "SD Huesca",
            country: "Spain",
            league: "Segunda División",
            city: "Huesca",
            stadium: "Estadio El Alcoraz",
            capacity: 7638,
            founded: 1960
          },
          {
            name: "Las Palmas",
            country: "Spain",
            league: "Segunda División",
            city: "Las Palmas",
            stadium: "Estadio de Gran Canaria",
            capacity: 32400,
            founded: 1949
          },
          {
            name: "Leganés",
            country: "Spain",
            league: "Segunda División",
            city: "Leganés",
            stadium: "Estadio Municipal de Butarque",
            capacity: 10278,
            founded: 1928
          },
          {
            name: "Logroñés",
            country: "Spain",
            league: "Segunda División",
            city: "Logroño",
            stadium: "Estadio Las Gaunas",
            capacity: 16000,
            founded: 1940
          },
          {
            name: "Lugo",
            country: "Spain",
            league: "Segunda División",
            city: "Lugo",
            stadium: "Estadio Anxo Carro",
            capacity: 8038,
            founded: 1953
          },
          {
            name: "Málaga",
            country: "Spain",
            league: "Segunda División",
            city: "Málaga",
            stadium: "Estadio La Rosaleda",
            capacity: 30044,
            founded: 1904
          },
          {
            name: "Mirandés",
            country: "Spain",
            league: "Segunda División",
            city: "Miranda de Ebro",
            stadium: "Estadio Municipal de Anduva",
            capacity: 6107,
            founded: 1927
          },
          {
            name: "Real Oviedo",
            country: "Spain",
            league: "Segunda División",
            city: "Oviedo",
            stadium: "Estadio Carlos Tartiere",
            capacity: 30176,
            founded: 1926
          },
          {
            name: "Real Sociedad B",
            country: "Spain",
            league: "Segunda División",
            city: "San Sebastián",
            stadium: "Zubieta Training Ground",
            capacity: 2000,
            founded: 1951
          },
          {
            name: "Sabadell",
            country: "Spain",
            league: "Segunda División",
            city: "Sabadell",
            stadium: "Estadio Nova Creu Alta",
            capacity: 11500,
            founded: 1903
          },
          {
            name: "Sporting Gijón",
            country: "Spain",
            league: "Segunda División",
            city: "Gijón",
            stadium: "Estadio El Molinón",
            capacity: 30000,
            founded: 1905
          },
          {
            name: "FC Augsburg",
            country: "Germany",
            league: "Bundesliga",
            city: "Augsburg",
            stadium: "WWK Arena",
            capacity: 30660,
            founded: 1907
          },
          {
            name: "Hertha Berlin",
            country: "Germany",
            league: "Bundesliga",
            city: "Berlin",
            stadium: "Olympiastadion",
            capacity: 74769,
            founded: 1892
          },
          {
            name: "Union Berlin",
            country: "Germany",
            league: "Bundesliga",
            city: "Berlin",
            stadium: "Stadion An der Alten Försterei",
            capacity: 22744,
            founded: 1966
          },
          {
            name: "Arminia Bielefeld",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Bielefeld",
            stadium: "SchücoArena",
            capacity: 27400,
            founded: 1905
          },
          {
            name: "VfL Bochum",
            country: "Germany",
            league: "Bundesliga",
            city: "Bochum",
            stadium: "Vonovia Ruhrstadion",
            capacity: 27724,
            founded: 1848
          },
          {
            name: "Borussia Dortmund",
            country: "Germany",
            league: "Bundesliga",
            city: "Dortmund",
            stadium: "Signal Iduna Park",
            capacity: 81365,
            founded: 1909
          },
          {
            name: "Eintracht Frankfurt",
            country: "Germany",
            league: "Bundesliga",
            city: "Frankfurt",
            stadium: "Deutsche Bank Park",
            capacity: 51500,
            founded: 1899
          },
          {
            name: "SC Freiburg",
            country: "Germany",
            league: "Bundesliga",
            city: "Freiburg im Breisgau",
            stadium: "Schwarzwald-Stadion",
            capacity: 24000,
            founded: 1904
          },
          {
            name: "Bayer Leverkusen",
            country: "Germany",
            league: "Bundesliga",
            city: "Leverkusen",
            stadium: "BayArena",
            capacity: 30210,
            founded: 1904
          },
          {
            name: "Bayern Munich",
            country: "Germany",
            league: "Bundesliga",
            city: "Munich",
            stadium: "Allianz Arena",
            capacity: 75000,
            founded: 1900
          },
          {
            name: "Borussia Mönchengladbach",
            country: "Germany",
            league: "Bundesliga",
            city: "Mönchengladbach",
            stadium: "Borussia-Park",
            capacity: 54057,
            founded: 1900
          },
          {
            name: "FC Köln",
            country: "Germany",
            league: "Bundesliga",
            city: "Cologne",
            stadium: "RheinEnergieStadion",
            capacity: 50000,
            founded: 1948
          },
          {
            name: "Mainz 05",
            country: "Germany",
            league: "Bundesliga",
            city: "Mainz",
            stadium: "Opel Arena",
            capacity: 34000,
            founded: 1905
          },
          {
            name: "RB Leipzig",
            country: "Germany",
            league: "Bundesliga",
            city: "Leipzig",
            stadium: "Red Bull Arena",
            capacity: 42959,
            founded: 2009
          },
          {
            name: "VfB Stuttgart",
            country: "Germany",
            league: "Bundesliga",
            city: "Stuttgart",
            stadium: "Mercedes-Benz Arena",
            capacity: 60441,
            founded: 1893
          },
          {
            name: "VfL Wolfsburg",
            country: "Germany",
            league: "Bundesliga",
            city: "Wolfsburg",
            stadium:"Volkswagen Arena",
            capacity: 30000,
            founded: 1945
          },
          {
            name: "Dynamo Dresden",
            country: "Germany",
            league: "3. Liga",
            city: "Dresden",
            stadium: "Rudolf-Harbig-Stadion",
            capacity: 32066,
            founded: 1953
          },
          {
            name: "Eintracht Braunschweig",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Braunschweig",
            stadium: "Eintracht-Stadion",
            capacity: 23500,
            founded: 1895
          },
          {
            name: "FC Ingolstadt 04",
            country: "Germany",
            league: "3. Liga",
            city: "Ingolstadt",
            stadium: "Audi-Sportpark",
            capacity: 15125,
            founded: 2004
          },
          {
            name: "FC St. Pauli",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Hamburg",
            stadium: "Millerntor-Stadion",
            capacity: 29546,
            founded: 1910
          },
          {
            name: "Fortuna Düsseldorf",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Düsseldorf",
            stadium: "Merkur Spiel-Arena",
            capacity: 54600,
            founded: 1895
          },
          {
            name: "Hamburger SV",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Hamburg",
            stadium: "Volksparkstadion",
            capacity: 57000,
            founded: 1887
          },
          {
            name: "Hannover 96",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Hannover",
            stadium: "HDI-Arena",
            capacity: 49300,
            founded: 1896
          },
          {
            name: "Holstein Kiel",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Kiel",
            stadium: "Holstein-Stadion",
            capacity: 11850,
            founded: 1900
          },
          {
            name: "Karlsruher SC",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Karlsruhe",
            stadium: "Wildparkstadion",
            capacity: 32000,
            founded: 1894
          },
          {
            name: "SC Paderborn 07",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Paderborn",
            stadium: "Benteler-Arena",
            capacity: 15000,
            founded: 1985
          },
          {
            name: "SV Darmstadt 98",
            country: "Germany",
            league: "Bundesliga 2",
            city: "Darmstadt",
            stadium: "Jonathan-Heimes-Stadion am Böllenfalltor",
            capacity: 17400,
            founded: 1898
          },
          {
            name: "Schalke 04",
            country: "Germany",
            league: "Bundesliga",
            city: "Gelsenkirchen",
            stadium: "Veltins-Arena",
            capacity: 62273,
            founded: 1904
          },
          {
            name: "Atalanta",
            country: "Italy",
            league: "Serie A",
            city: "Bergamo",
            stadium: "Gewiss Stadium",
            capacity: 21659,
            founded: 1907
          },
          {
            name: "Bologna",
            country: "Italy",
            league: "Serie A",
            city: "Bologna",
            stadium: "Renato Dall'Ara Stadium",
            capacity: 38279,
            founded: 1909
          },
          {
            name: "Cagliari",
            country: "Italy",
            league: "Serie B",
            city: "Cagliari",
            stadium: "Sardegna Arena",
            capacity: 16023,
            founded: 1920
          },
          {
            name: "Empoli",
            country: "Italy",
            league: "Serie A",
            city: "Empoli",
            stadium: "Stadio Carlo Castellani",
            capacity: 16850,
            founded: 1920
          },
          {
            name: "Fiorentina",
            country: "Italy",
            league: "Serie A",
            city: "Florence",
            stadium: "Stadio Artemio Franchi",
            capacity: 43247,
            founded: 1926
          },
          {
            name: "Genoa",
            country: "Italy",
            league: "Serie B",
            city: "Genoa",
            stadium: "Stadio Luigi Ferraris",
            capacity: 36378,
            founded: 1893
          },
          {
            name: "Hellas Verona",
            country: "Italy",
            league: "Serie A",
            city: "Verona",
            stadium: "Stadio Marc'Antonio Bentegodi",
            capacity: 39303,
            founded: 1903
          },
          {
            name: "Inter Milan",
            country: "Italy",
            league: "Serie A",
            city: "Milan",
            stadium: "San Siro",
            capacity: 80018,
            founded: 1908
          },
          {
            name: "Juventus",
            country: "Italy",
            league: "Serie A",
            city: "Turin",
            stadium: "Allianz Stadium",
            capacity: 41507,
            founded: 1897
          },
          {
            name: "Lazio",
            country: "Italy",
            league: "Serie A",
            city: "Rome",
            stadium: "Stadio Olimpico",
            capacity: 72698,
            founded: 1900
          },
          {
            name: "Milan",
            country: "Italy",
            league: "Serie A",
            city: "Milan",
            stadium: "San Siro",
            capacity: 80018,
            founded: 1899
          },
          {
            name: "Napoli",
            country: "Italy",
            league: "Serie A",
            city: "Naples",
            stadium: "Stadio Diego Armando Maradona",
            capacity: 54023,
            founded: 1926
          },
          {
            name: "Roma",
            country: "Italy",
            league: "Serie A",
            city: "Rome",
            stadium: "Stadio Olimpico",
            capacity: 72698,
            founded: 1927,
          },
          {
            name: 'Lecce',
            country: 'Italy',
            league: 'Serie A',
            city: 'Lecce',
            stadium: 'Stadio Via del Mare',
            capacity: 33345,
            founded: 1908
          },
          {
            name: 'AC Monza',
            country: 'Italy',
            league: 'Serie A',
            city: 'Monza',
            stadium: 'Stadio Brianteo',
            capacity: 18230,
            founded: 1912
          },
          {
            name: 'AS Livorno',
            country: 'Italy',
            league: 'Serie B',
            city: 'Livorno',
            stadium: 'Stadio Armando Picchi',
            capacity: 19333,
            founded: 1915
          },
          {
            name: 'Ascoli Picchio FC 1898',
            country: 'Italy',
            league: 'Serie B',
            city: 'Ascoli Piceno',
            stadium: 'Stadio Cino e Lillo Del Duca',
            capacity: 20248,
            founded: 1898
          },
          {
            name: 'Brescia Calcio',
            country: 'Italy',
            league: 'Serie B',
            city: 'Brescia',
            stadium: 'Stadio Mario Rigamonti',
            capacity: 16636,
            founded: 1911
          },
          {
            name: 'Calcio Padova',
            country: 'Italy',
            league: 'Serie B',
            city: 'Padua',
            stadium: 'Stadio Euganeo',
            capacity: 32044,
            founded: 1910
          },
          {
            name: 'Carpi FC 1909',
            country: 'Italy',
            league: 'Serie B',
            city: 'Carpi',
            stadium: 'Stadio Sandro Cabassi',
            capacity: 4521,
            founded: 1909
          },
          {
            name: 'Cremonese',
            country: 'Italy',
            league: 'Serie A',
            city: 'Cremona',
            stadium: 'Stadio Giovanni Zini',
            capacity: 20000,
            founded: 1903
          },
          {
            name: 'Crotone',
            country: 'Italy',
            league: 'Serie B',
            city: 'Crotone',
            stadium: 'Stadio Ezio Scida',
            capacity: 16786,
            founded: 1923
          },
          {
            name: 'FC Südtirol',
            country: 'Italy',
            league: 'Serie B',
            city: 'Bolzano',
            stadium: 'Druso Stadium',
            capacity: 4850,
            founded: 1974
          },
          {
            name: 'Frosinone',
            country: 'Italy',
            league: 'Serie B',
            city: 'Frosinone',
            stadium: 'Stadio Benito Stirpe',
            capacity: 16524,
            founded: 1912
          },
          {
            name: 'LR Vicenza Virtus',
            country: 'Italy',
            league: 'Serie B',
            city: 'Vicenza',
            stadium: 'Stadio Romeo Menti',
            capacity: 12300,
            founded: 1902
          },
          {
            name: 'Modena FC',
            country: 'Italy',
            league: 'Serie B',
            city: 'Modena',
            stadium: 'Stadio Alberto Braglia',
            capacity: 21000,
            founded: 1912
          },
          {
            name: "Belenenses SAD",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Lisbon",
            stadium: "Estádio Nacional",
            capacity: 37478,
            founded: 1919
          },
          {
            name: "Boavista FC",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Porto",
            stadium: "Estádio do Bessa",
            capacity: 28526,
            founded: 1903
          },
          {
            name: "FC Famalicão",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Vila Nova de Famalicão",
            stadium: "Estádio Municipal 22 de Junho",
            capacity: 5546,
            founded: 1931
          },
          {
            name: "FC Porto",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Porto",
            stadium: "Estádio do Dragão",
            capacity: 50476,
            founded: 1893
          },
          {
            name: "Gil Vicente FC",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Barcelos",
            stadium: "Estádio Cidade de Barcelos",
            capacity: 12315,
            founded: 1924
          },
          {
            name: "Moreirense FC",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Moreira de Cónegos",
            stadium: "Estádio Comendador Joaquim de Almeida Freitas",
            capacity: 9035,
            founded: 1938
          },
          {
            name: "Portimonense SC",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Portimão",
            stadium: "Estádio Municipal de Portimão",
            capacity: 8500,
            founded: 1914
          },
          {
            name: "Rio Ave FC",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Vila do Conde",
            stadium: "Estádio do Rio Ave FC",
            capacity: 12815,
            founded: 1939
          },
          {
            name: "Santa Clara",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Ponta Delgada",
            stadium: "Estádio de São Miguel",
            capacity: 13000,
            founded: 1927
          },
          {
            name: "SC Braga",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Braga",
            stadium: "Estádio Municipal de Braga",
            capacity: 30014,
            founded: 1921
          },
          {
            name: "Sporting CP",
            country: "Portugal",
            league: "Primeira Liga",
            city: "Lisbon",
            stadium: "Estádio José Alvalade",
            capacity: 50095,
            founded: 1906
          },
          {
            name: "ADO Den Haag",
            country: "Netherlands",
            league: "Eredivisie",
            city: "The Hague",
            stadium: "Cars Jeans Stadion",
            capacity: 15000,
            founded: 1905
          },
          {
            name: "Ajax",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Amsterdam",
            stadium: "Johan Cruijff ArenA",
            capacity: 54851,
            founded: 1900
          },
          {
            name: "AZ",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Alkmaar",
            stadium: "AFAS Stadion",
            capacity: 17023,
            founded: 1967
          },
          {
            name: "FC Emmen",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Emmen",
            stadium: "De Oude Meerdijk",
            capacity: 8600,
            founded: 1925
          },
          {
            name: "FC Groningen",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Groningen",
            stadium: "Hitachi Capital Mobility Stadion",
            capacity: 22350,
            founded: 1971
          },
          {
            name: "FC Twente",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Enschede",
            stadium: "De Grolsch Veste",
            capacity: 30205,
            founded: 1965
          },
          {
            name: "FC Utrecht",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Utrecht",
            stadium: "Stadion Galgenwaard",
            capacity: 23500,
            founded: 1970
          },
          {
            name: "Feyenoord",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Rotterdam",
            stadium: "De Kuip",
            capacity: 51700,
            founded: 1908
          },
          {
            name: "Fortuna Sittard",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Sittard-Geleen",
            stadium: "Fortuna Sittard Stadion",
            capacity: 12500,
            founded: 1968
          },
          {
            name: "Go Ahead Eagles",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Deventer",
            stadium: "De Adelaarshorst",
            capacity: 9949,
            founded: 1902
          },
          {
            name: "Heracles Almelo",
            country: "Netherlands",
            league: "Eredivisie",
            city: "Almelo",
            stadium: "Erve Asito",
            capacity: 13000,
            founded: 1903
          },
          {
            name: "BATE Borisov",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Borisov",
            stadium: "Borisov Arena",
            capacity: 12869,
            founded: 1973
          },
          {
            name: "Dinamo Brest",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Brest",
            stadium: "OSK Brestskiy",
            capacity: 10104,
            founded: 1960
          },
          {
            name: "Dinamo Minsk",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Minsk",
            stadium: "Traktor Stadium",
            capacity: 16386,
            founded: 1927
          },
          {
            name: "Energetik-BGU Minsk",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Minsk",
            stadium: "RCOR-BGU Stadium",
            capacity: 1500,
            founded: 1996
          },
          {
            name: "FC Gomel",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Gomel",
            stadium: "Central Stadium",
            capacity: 14682,
            founded: 1959
          },
          {
            name: "FC Isloch Minsk Raion",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Minsk",
            stadium: "FC Minsk Stadium",
            capacity: 2200,
            founded: 2007
          },
          {
            name: "FC Minsk",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Minsk",
            stadium: "FC Minsk Stadium",
            capacity: 3838,
            founded: 2006
          },
          {
            name: "FC Neman Grodno",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Grodno",
            stadium: "Neman Stadium",
            capacity: 8160,
            founded: 1964
          },
          {
            name: "FC Shakhtyor Soligorsk",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Soligorsk",
            stadium: "Shakhtyor Stadium",
            capacity: 4997,
            founded: 1961
          },
          {
            name: "FC Slutsk",
            country: "Belarus",
            league: "Belarusian Premier League",
            city: "Slutsk",
            stadium: "City Stadium",
            capacity: 2200,
            founded: 2012
          },
          {
            name: "NFK Minsk",
            country: "Belarus",
            league: "Belarusian First League",
            city: "Minsk",
            stadium: "Alempijski",
            capacity: 1500,
            founded: 2014,
          },
          {
            name: "Shakhtar Donetsk",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Donetsk",
            stadium: "Oblasny SportKomplex Metalist",
            capacity: 40000,
            founded: 1936,
          },
          {
            name: "Dynamo Kyiv",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Kyiv",
            stadium: "Olimpiyskiy National Sports Complex",
            capacity: 70050,
            founded: 1927,
          },
          {
            name: "Vorskla Poltava",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Poltava",
            stadium: "Vorskla Stadium",
            capacity: 24888,
            founded: 1955,
          },
          {
            name: "Desna Chernihiv",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Chernihiv",
            stadium: "Yunost Stadium",
            capacity: 10442,
            founded: 1960,
          },
          {
            name: "Kolos Kovalivka",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Kovalivka",
            stadium: "Kolos Stadium",
            capacity: 5000,
            founded: 2009,
          },
          {
            name: "Oleksandriya",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Oleksandriya",
            stadium: "Nika Stadium",
            capacity: 5000,
            founded: 1948,
          },
          {
            name: "Zorya Luhansk",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Luhansk",
            stadium: "Slavutych Arena",
            capacity: 12000,
            founded: 1923,
          },
          {
            name: "Rukh Lviv",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Lviv",
            stadium: "Arena Lviv",
            capacity: 34918,
            founded: 1958,
          },
          {
            name: "Inhulets Petrove",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Petrove",
            stadium: "Inhulets Stadium",
            capacity: 5930,
            founded: 2009,
          },
          {
            name: "Mariupol",
            country: "Ukraine",
            league: "Ukrainian Premier League",
            city: "Mariupol",
            stadium: "Illichivets Stadium",
            capacity: 12000,
            founded: 1936,
          },
          {
            name: "Aldosivi",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Mar del Plata",
            stadium: "Estadio José María Minella",
            capacity: 35254,
            founded: 1913,
          },
          {
            name: "Argentinos Juniors",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Buenos Aires",
            stadium: "Estadio Diego Armando Maradona",
            capacity: 24564,
            founded: 1904,
          },
          {
            name: "Arsenal de Sarandí",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Avellaneda",
            stadium: "Estadio Julio H. Grondona",
            capacity: 16600,
            founded: 1957,
          },
          {
            name: "Atlético Tucumán",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "San Miguel de Tucumán",
            stadium: "Estadio Monumental José Fierro",
            capacity: 35000,
            founded: 1902,
          },
          {
            name: "Banfield",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Banfield",
            stadium: "Estadio Florencio Sola",
            capacity: 34400,
            founded: 1896,
          },
          {
            name: "Boca Juniors",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Buenos Aires",
            stadium: "La Bombonera",
            capacity: 49000,
            founded: 1905,
          },
          {
            name: "Central Córdoba (Santiago del Estero)",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Santiago del Estero",
            stadium: "Estadio Alfredo Terrera",
            capacity: 28000,
            founded: 1919,
          },
          {
            name: "Colón",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Santa Fe",
            stadium: "Estadio Brigadier General Estanislao López",
            capacity: 33000,
            founded: 1905,
          },
          {
            name: "Defensa y Justicia",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "Florencio Varela",
            stadium: "Estadio Norberto Tomaghello",
            capacity: 10500,
            founded: 1935,
          },
          {
            name: "Estudiantes de La Plata",
            country: "Argentina",
            league: "Liga Profesional de Fútbol",
            city: "La Plata",
            stadium: "Estadio Jorge Luis Hirschi",
            capacity: 30100,
            founded: 1905,
          },{
            name: "Atlanta United FC",
            country: "United States",
            league: "MLS",
            city: "Atlanta",
            stadium: "Mercedes-Benz Stadium",
            capacity: 72000,
            founded: 2014
          },
          {
            name: "Austin FC",
            country: "United States",
            league: "MLS",
            city: "Austin",
            stadium: "Q2 Stadium",
            capacity: 20000,
            founded: 2018
          },
          {
            name: "CF Montréal",
            country: "Canada",
            league: "MLS",
            city: "Montreal",
            stadium: "Saputo Stadium",
            capacity: 20801,
            founded: 2010
          },
          {
            name: "Chicago Fire FC",
            country: "United States",
            league: "MLS",
            city: "Chicago",
            stadium: "Soldier Field",
            capacity: 61500,
            founded: 1997
          },
          {
            name: "Colorado Rapids",
            country: "United States",
            league: "MLS",
            city: "Commerce City",
            stadium: "Dick's Sporting Goods Park",
            capacity: 18596,
            founded: 1995
          },
          {
            name: "Columbus Crew SC",
            country: "United States",
            league: "MLS",
            city: "Columbus",
            stadium: "Lower.com Field",
            capacity: 20000,
            founded: 1994
          },
          {
            name: "D.C. United",
            country: "United States",
            league: "MLS",
            city: "Washington, D.C.",
            stadium: "Audi Field",
            capacity: 20500,
            founded: 1995
          },
          {
            name: "FC Cincinnati",
            country: "United States",
            league: "MLS",
            city: "Cincinnati",
            stadium: "TQL Stadium",
            capacity: 26500,
            founded: 2015
          },
          {
            name: "FC Dallas",
            country: "United States",
            league: "MLS",
            city: "Frisco",
            stadium: "Toyota Stadium",
            capacity: 20500,
            founded: 1996
          },
          {
            name: "Houston Dynamo FC",
            country: "United States",
            league: "MLS",
            city: "Houston",
            stadium: "BBVA Stadium",
            capacity: 22039,
            founded: 2005
          },
          {
            name: "Inter Miami CF",
            country: "United States",
            league: "MLS",
            city: "Fort Lauderdale",
            stadium: "DRV PNK Stadium",
            capacity: 18500,
            founded: 2018
          },
          {
            name: "Los Angeles FC",
            country: "United States",
            league: "MLS",
            city: "Los Angeles",
            stadium: "Banc of California Stadium",
            capacity: 22000,
            founded: 2014
          },
          {
            name: "LA Galaxy",
            country: "United States",
            league: "MLS",
            city: "Carson",
            stadium: "Dignity Health Sports Park",
            capacity: 27000,
            founded: 1995
          },
          {
            name: "Accrington Stanley",
            country: "England",
            league: "League One",
            city: "Accrington",
            stadium: "Wham Stadium",
            capacity: 5050,
            founded: 1968
          },
          {
            name: "AFC Wimbledon",
            country: "England",
            league: "League One",
            city: "Kingston upon Thames",
            stadium: "Plough Lane",
            capacity: 9314,
            founded: 2002
          },
          {
            name: "Bolton Wanderers",
            country: "England",
            league: "League One",
            city: "Bolton",
            stadium: "University of Bolton Stadium",
            capacity: 28723,
            founded: 1874
          },
          {
            name: "Burton Albion",
            country: "England",
            league: "League One",
            city: "Burton upon Trent",
            stadium: "Pirelli Stadium",
            capacity: 6912,
            founded: 1950
          },
          {
            name: "Cambridge United",
            country: "England",
            league: "League One",
            city: "Cambridge",
            stadium: "Abbey Stadium",
            capacity: 8217,
            founded: 1912
          },
          {
            name: "Cheltenham Town",
            country: "England",
            league: "League One",
            city: "Cheltenham",
            stadium: "Jonny-Rocks Stadium",
            capacity: 7066,
            founded: 1887
          },
          {
            name: "Crewe Alexandra",
            country: "England",
            league: "League One",
            city: "Crewe",
            stadium: "Gresty Road",
            capacity: 10153,
            founded: 1877
          },
          {
            name: "Doncaster Rovers",
            country: "England",
            league: "League One",
            city: "Doncaster",
            stadium: "Keepmoat Stadium",
            capacity: 15231,
            founded: 1879
          },
          {
            name: "Fleetwood Town",
            country: "England",
            league: "League One",
            city: "Fleetwood",
            stadium: "Highbury Stadium",
            capacity: 5320,
            founded: 1908
          },
          {
            name: "Gillingham",
            country: "England",
            league: "League One",
            city: "Gillingham",
            stadium: "Priestfield Stadium",
            capacity: 11203,
            founded: 1893
          },
          {
            name: "Ipswich Town",
            country: "England",
            league: "League One",
            city: "Ipswich",
            stadium: "Portman Road",
            capacity: 30311,
            founded: 1878
          },
          {
            name: "Lincoln City",
            country: "England",
            league: "League One",
            city: "Lincoln",
            stadium: "LNER Stadium",
            capacity: 10121,
            founded: 1884
          },
          {
            name: "MK Dons",
            country: "England",
            league: "League One",
            city: "Milton Keynes",
            stadium: "Stadium MK",
            capacity: 30500,
            founded: 2000
          },
          {
            name: "Barrow AFC",
            country: "England",
            league: "League Two",
            city: "Barrow-in-Furness",
            stadium: "Holker Street",
            capacity: 5_045,
            founded: 1901
          },
          {
            name: "Bradford City AFC",
            country: "England",
            league: "League Two",
            city: "Bradford",
            stadium: "Utilita Energy Stadium",
            capacity: 25_136,
            founded: 1903
          },
          {
            name: "Bristol Rovers FC",
            country: "England",
            league: "League Two",
            city: "Bristol",
            stadium: "Memorial Stadium",
            capacity: 12_296,
            founded: 1883
          },
          {
            name: "Carlisle United FC",
            country: "England",
            league: "League Two",
            city: "Carlisle",
            stadium: "Brunton Park",
            capacity: 17_949,
            founded: 1904
          },
          {
            name: "Colchester United FC",
            country: "England",
            league: "League Two",
            city: "Colchester",
            stadium: "JobServe Community Stadium",
            capacity: 10_105,
            founded: 1937
          },
          {
            name: "Crawley Town FC",
            country: "England",
            league: "League Two",
            city: "Crawley",
            stadium: "People's Pension Stadium",
            capacity: 6_134,
            founded: 1896
          },
          {
            name: "Exeter City FC",
            country: "England",
            league: "League Two",
            city: "Exeter",
            stadium: "St James Park",
            capacity: 8_830,
            founded: 1904
          },
          {
            name: "Forest Green Rovers FC",
            country: "England",
            league: "League Two",
            city: "Nailsworth",
            stadium: "The New Lawn",
            capacity: 5_147,
            founded: 1889
          },
          {
            name: "Harrogate Town AFC",
            country: "England",
            league: "League Two",
            city: "Harrogate",
            stadium: "EnviroVent Stadium",
            capacity: 5_000,
            founded: 1914
          },
          {
            name: "Hartlepool United FC",
            country: "England",
            league: "League Two",
            city: "Hartlepool",
            stadium: "Victoria Park",
            capacity: 7_856,
            founded: 1908
          },
          {
            name: "Leyton Orient FC",
            country: "England",
            league: "League Two",
            city: "London",
            stadium: "Breyer Group Stadium",
            capacity: 9_271,
            founded: 1881
          },
          {
            name: "Mansfield Town FC",
            country: "England",
            league: "League Two",
            city: "Mansfield",
            stadium: "One Call Stadium",
            capacity: 9_186,
            founded: 1897
          },{
            name: "1. FC Slovácko",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Uherské Hradiště",
            stadium: "Městský fotbalový stadion",
            capacity: 8061,
            founded: 1927
          },
          {
            name: "1. FK Příbram",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Příbram",
            stadium: "Energon Arena",
            capacity: 9318,
            founded: 1928
          },
          {
            name: "AC Sparta Praha",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Prague",
            stadium: "Generali Arena",
            capacity: 18200,
            founded: 1893
          },
          {
            name: "Bohemians 1905",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Prague",
            stadium: "Stadion Ďolíček",
            capacity: 7000,
            founded: 1905
          },
          {
            name: "FC Baník Ostrava",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Ostrava",
            stadium: "Městský stadion",
            capacity: 17046,
            founded: 1922
          },
          {
            name: "FC Fastav Zlín",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Zlín",
            stadium: "Letná stadion",
            capacity: 6800,
            founded: 1919
          },
          {
            name: "FC Hradec Králové",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Hradec Králové",
            stadium: "Všesportovní stadion",
            capacity: 7500,
            founded: 1905
          },
          {
            name: "FC Slovan Liberec",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Liberec",
            stadium: "Stadion u Nisy",
            capacity: 9934,
            founded: 1958
          },
          {
            name: "FC Viktoria Plzeň",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Plzeň",
            stadium: "Doosan Aréna",
            capacity: 11635,
            founded: 1911
          },
          {
            name: "MFK Karviná",
            country: "Czech Republic",
            league: "Czech First League",
            city: "Karviná",
            stadium: "Městský stadion",
            capacity: 3000,
            founded: 1958
          },
          {
            name: "AaB",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Aalborg",
            stadium: "Aalborg Portland Park",
            capacity: 13700,
            founded: 1885,
          },
          {
            name: "AC Horsens",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Horsens",
            stadium: "CASA Arena Horsens",
            capacity: 10000,
            founded: 1994,
          },
          {
            name: "AFC Eskilstuna",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Eskilstuna",
            stadium: "Tunavallen",
            capacity: 7500,
            founded: 2005,
          },
          {
            name: "AGF Aarhus",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Aarhus",
            stadium: "Ceres Park & Arena",
            capacity: 20000,
            founded: 1902,
          },
          {
            name: "Brøndby IF",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Brøndby",
            stadium: "Brøndby Stadium",
            capacity: 29000,
            founded: 1964,
          },
          {
            name: "FC Copenhagen",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Copenhagen",
            stadium: "Telia Parken",
            capacity: 38065,
            founded: 1992,
          },
          {
            name: "FC Midtjylland",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Herning",
            stadium: "MCH Arena",
            capacity: 11809,
            founded: 1999,
          },
          {
            name: "FC Nordsjælland",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Farum",
            stadium: "Right to Dream Park",
            capacity: 10000,
            founded: 2003,
          },
          {
            name: "Lyngby BK",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Lyngby",
            stadium: "Lyngby Stadion",
            capacity: 10000,
            founded: 1921,
          },
          {
            name: "OB",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Odense",
            stadium: "Nature Energy Park",
            capacity: 15500,
            founded: 1887,
          },
          {
            name: "Randers FC",
            country: "Denmark",
            league: "Danish Superliga",
            city: "Randers",
            stadium: "Cepheus Park Randers",
            capacity: 10500,
            founded: 2003,
          },{
            name: "AIK",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Stockholm",
            stadium: "Friends Arena",
            capacity: 54000,
            founded: 1891,
          },
          {
            name: "Djurgårdens IF",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Stockholm",
            stadium: "Stockholms Olympiastadion",
            capacity: 14417,
            founded: 1891,
          },
          {
            name: "Elfsborg",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Borås",
            stadium: "Borås Arena",
            capacity: 16500,
            founded: 1904,
          },
          {
            name: "GIF Sundsvall",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Sundsvall",
            stadium: "Norrporten Arena",
            capacity: 8022,
            founded: 1903,
          },
          {
            name: "Hammarby IF",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Stockholm",
            stadium: "Tele2 Arena",
            capacity: 30000,
            founded: 1897,
          },
          {
            name: "Helsingborgs IF",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Helsingborg",
            stadium: "Olympia",
            capacity: 16600,
            founded: 1907,
          },
          {
            name: "IFK Göteborg",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Gothenburg",
            stadium: "Gamla Ullevi",
            capacity: 18500,
            founded: 1904,
          },
          {
            name: "IFK Norrköping",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Norrköping",
            stadium: "Östgötaporten",
            capacity: 17500,
            founded: 1897,
          },
          {
            name: "IK Sirius",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Uppsala",
            stadium: "Studenternas IP",
            capacity: 7500,
            founded: 1907,
          },
          {
            name: "Kalmar FF",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Kalmar",
            stadium: "Guldfågeln Arena",
            capacity: 12000,
            founded: 1910,
          },
          {
            name: "Malmö FF",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Malmö",
            stadium: "Eleda Stadion",
            capacity: 24000,
            founded: 1910,
          },
          {
            name: "BK Häcken",
            country: "Sweden",
            league: "Allsvenskan",
            city: "Gothenburg",
            stadium: "Bravida Arena",
            capacity: 7000,
            founded: 1940,
          },
          {
            name: "Aberdeen",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Aberdeen",
            stadium: "Pittodrie Stadium",
            capacity: 20771,
            founded: 1903
          },
          {
            name: "Celtic",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Glasgow",
            stadium: "Celtic Park",
            capacity: 60832,
            founded: 1888
          },
          {
            name: "Dundee United",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Dundee",
            stadium: "Tannadice Park",
            capacity: 14209,
            founded: 1909
          },
          {
            name: "Heart of Midlothian",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Edinburgh",
            stadium: "Tynecastle Park",
            capacity: 20054,
            founded: 1874
          },
          {
            name: "Hibernian",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Edinburgh",
            stadium: "Easter Road Stadium",
            capacity: 20312,
            founded: 1875
          },
          {
            name: "Livingston",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Livingston",
            stadium: "Tony Macaroni Arena",
            capacity: 9600,
            founded: 1943
          },
          {
            name: "Motherwell",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Motherwell",
            stadium: "Fir Park",
            capacity: 13009,
            founded: 1886
          },
          {
            name: "Rangers",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Glasgow",
            stadium: "Ibrox Stadium",
            capacity: 50500,
            founded: 1872
          },
          {
            name: "Ross County",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Dingwall",
            stadium: "Victoria Park",
            capacity: 6548,
            founded: 1929
          },
          {
            name: "St Johnstone",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Perth",
            stadium: "McDiarmid Park",
            capacity: 10673,
            founded: 1884
          },
          {
            name: "St Mirren",
            country: "Scotland",
            league: "Scottish Premiership",
            city: "Paisley",
            stadium: "Simple Digital Arena",
            capacity: 8012,
            founded: 1877
          },
          {
            name: "SK Rapid Wien",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Vienna",
            stadium: "Allianz Stadion",
            capacity: 28733,
            founded: 1899
          },
          {
            name: "Red Bull Salzburg",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Salzburg",
            stadium: "Red Bull Arena",
            capacity: 30491,
            founded: 1933
          },
          {
            name: "SK Sturm Graz",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Graz",
            stadium: "Merkur Arena",
            capacity: 15388,
            founded: 1909
          },
          {
            name: "FK Austria Wien",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Vienna",
            stadium: "Generali Arena",
            capacity: 17500,
            founded: 1911
          },
          {
            name: "SKN St. Pölten",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "St. Pölten",
            stadium: "NV Arena",
            capacity: 8000,
            founded: 2000
          },
          {
            name: "Wolfsberger AC",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Wolfsberg",
            stadium: "Lavanttal-Arena",
            capacity: 7100,
            founded: 1931
          },
          {
            name: "FC Admira Wacker Mödling",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Maria Enzersdorf",
            stadium: "Bundesstadion Südstadt",
            capacity: 12000,
            founded: 1905
          },
          {
            name: "SCR Altach",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Altach",
            stadium: "CASHPOINT Arena",
            capacity: 8500,
            founded: 1929
          },
          {
            name: "FC Flyeralarm Admira",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Maria Enzersdorf",
            stadium: "Bundesstadion Südstadt",
            capacity: 12000,
            founded: 1905
          },
          {
            name: "TSV Hartberg",
            country: "Austria",
            league: "Österreichische Fußball-Bundesliga",
            city: "Hartberg",
            stadium: "Profertil Arena Hartberg",
            capacity: 4500,
            founded: 1946
          },
          {
            name: "Bohemians",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Dublin",
            stadium: "Dalymount Park",
            capacity: 3199,
            founded: 1890
          },
          {
            name: "Derry City",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Derry",
            stadium: "Ryan McBride Brandywell Stadium",
            capacity: 7931,
            founded: 1928
          },
          {
            name: "Drogheda United",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Drogheda",
            stadium: "Head in the Game Park",
            capacity: 4000,
            founded: 1919
          },
          {
            name: "Finn Harps",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Ballybofey",
            stadium: "Finn Park",
            capacity: 6000,
            founded: 1954
          },
          {
            name: "Longford Town",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Longford",
            stadium: "Bishopsgate",
            capacity: 2084,
            founded: 1924
          },
          {
            name: "Shamrock Rovers",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Dublin",
            stadium: "Tallaght Stadium",
            capacity: 8250,
            founded: 1901
          },
          {
            name: "Sligo Rovers",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Sligo",
            stadium: "The Showgrounds",
            capacity: 5500,
            founded: 1928
          },
          {
            name: "St. Patrick's Athletic",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Dublin",
            stadium: "Richmond Park",
            capacity: 5335,
            founded: 1929
          },
          {
            name: "Waterford",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Waterford",
            stadium: "Regional Sports Centre",
            capacity: 6000,
            founded: 1930
          },
          {
            name: "Sligo Rovers",
            country: "Ireland",
            league: "Irish Premier Division",
            city: "Sligo",
            stadium: "The Showgrounds",
            capacity: 5500,
            founded: 1928
          },{
            name: "BSC Young Boys",
            country: "Switzerland",
            league: "Super League",
            city: "Bern",
            stadium: "Stade de Suisse",
            capacity: 31700,
            founded: 1898
          },
          {
            name: "FC Basel",
            country: "Switzerland",
            league: "Super League",
            city: "Basel",
            stadium: "St. Jakob-Park",
            capacity: 38512,
            founded: 1893
          },
          {
            name: "FC Lausanne-Sport",
            country: "Switzerland",
            league: "Super League",
            city: "Lausanne",
            stadium: "Stade Olympique de la Pontaise",
            capacity: 15000,
            founded: 1896
          },
          {
            name: "FC Lugano",
            country: "Switzerland",
            league: "Super League",
            city: "Lugano",
            stadium: "Stadio di Cornaredo",
            capacity: 14829,
            founded: 1908
          },
          {
            name: "FC Luzern",
            country: "Switzerland",
            league: "Super League",
            city: "Lucerne",
            stadium: "Swissporarena",
            capacity: 17400,
            founded: 1901
          },
          {
            name: "FC Sion",
            country: "Switzerland",
            league: "Super League",
            city: "Sion",
            stadium: "Stade de Tourbillon",
            capacity: 14000,
            founded: 1909
          },
          {
            name: "FC St. Gallen",
            country: "Switzerland",
            league: "Super League",
            city: "St. Gallen",
            stadium: "Kybunpark",
            capacity: 20000,
            founded: 1879
          },
          {
            name: "FC Vaduz",
            country: "Liechtenstein",
            league: "Super League",
            city: "Vaduz",
            stadium: "Rheinpark Stadion",
            capacity: 5785,
            founded: 1932
          },
          {
            name: "Grasshopper Club Zürich",
            country: "Switzerland",
            league: "Super League",
            city: "Zurich",
            stadium: "Letzigrund",
            capacity: 25000,
            founded: 1886
          },
          {
            name: "Servette FC",
            country: "Switzerland",
            league: "Super League",
            city: "Geneva",
            stadium: "Stade de Genève",
            capacity: 30150,
            founded: 1890
          }

  ];
  
  const teamInfo1 = document.getElementById('team-info1');
  const teamInfo2 = document.getElementById('team-info2');
  const teamInfo3 = document.getElementById('team-info3');
  const newTeamButton = document.getElementById('new-team-button');
  var arr_ti = [teamInfo1,teamInfo2,teamInfo3];
  
  function getRandomTeam() {
    const randomIndex = Math.floor(Math.random() * teams.length);
    return teams[randomIndex];
  }
  
  function displayTeamInfo(team,x) {
    x.innerHTML = `
      <img src="generic.png" class="img_choise">
      <p class="clubname">${team.name}</p>
      <p class="club_info">Country: ${team.country}</p>
      <p class="club_info">League: ${team.league}</p>
      <p class="club_info">City: ${team.city}</p>
      <p class="club_info">Stadium: ${team.stadium}</p>
      <p class="club_info">Capacity: ${team.capacity}</p>
      <p class="club_info">Founded: ${team.founded}</p>
      
    `;
  }
  
  function generateNewTeam() {
    for (let i = 0; i < 3; i++) {
        var x = arr_ti[i];
        const randomTeam = getRandomTeam();
        displayTeamInfo(randomTeam,x);
      }
  }
  
  generateNewTeam();

  