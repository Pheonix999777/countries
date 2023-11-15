const countries = [
  {
    name: {
      common: "American Samoa",
      official: "American Samoa",
      nativeName: {
        eng: {
          official: "American Samoa",
          common: "American Samoa",
        },
        smo: {
          official: "Sāmoa Amelika",
          common: "Sāmoa Amelika",
        },
      },
    },
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Pago Pago"],
    region: "Oceania",
    flag: "🇦🇸",
  },
  {
    name: {
      common: "Peru",
      official: "Republic of Peru",
      nativeName: {
        aym: {
          official: "Piruw Suyu",
          common: "Piruw",
        },
        que: {
          official: "Piruw Ripuwlika",
          common: "Piruw",
        },
        spa: {
          official: "República del Perú",
          common: "Perú",
        },
      },
    },
    currencies: {
      PEN: {
        name: "Peruvian sol",
        symbol: "S/ ",
      },
    },
    capital: ["Lima"],
    region: "Americas",
    flag: "🇵🇪",
  },
  {
    name: {
      common: "Tonga",
      official: "Kingdom of Tonga",
      nativeName: {
        eng: {
          official: "Kingdom of Tonga",
          common: "Tonga",
        },
        ton: {
          official: "Kingdom of Tonga",
          common: "Tonga",
        },
      },
    },
    currencies: {
      TOP: {
        name: "Tongan paʻanga",
        symbol: "T$",
      },
    },
    capital: ["Nuku'alofa"],
    region: "Oceania",
    flag: "🇹🇴",
  },
  {
    name: {
      common: "Mayotte",
      official: "Department of Mayotte",
      nativeName: {
        fra: {
          official: "Département de Mayotte",
          common: "Mayotte",
        },
      },
    },
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Mamoudzou"],
    region: "Africa",
    flag: "🇾🇹",
  },
  {
    name: {
      common: "Panama",
      official: "Republic of Panama",
      nativeName: {
        spa: {
          official: "República de Panamá",
          common: "Panamá",
        },
      },
    },
    currencies: {
      PAB: {
        name: "Panamanian balboa",
        symbol: "B/.",
      },
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Panama City"],
    region: "Americas",
    flag: "🇵🇦",
  },
  {
    name: {
      common: "Madagascar",
      official: "Republic of Madagascar",
      nativeName: {
        fra: {
          official: "République de Madagascar",
          common: "Madagascar",
        },
        mlg: {
          official: "Repoblikan'i Madagasikara",
          common: "Madagasikara",
        },
      },
    },
    currencies: {
      MGA: {
        name: "Malagasy ariary",
        symbol: "Ar",
      },
    },
    capital: ["Antananarivo"],
    region: "Africa",
    flag: "🇲🇬",
  },
  {
    name: {
      common: "Belgium",
      official: "Kingdom of Belgium",
      nativeName: {
        deu: {
          official: "Königreich Belgien",
          common: "Belgien",
        },
        fra: {
          official: "Royaume de Belgique",
          common: "Belgique",
        },
        nld: {
          official: "Koninkrijk België",
          common: "België",
        },
      },
    },
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Brussels"],
    region: "Europe",
    flag: "🇧🇪",
  },
  {
    name: {
      common: "Central African Republic",
      official: "Central African Republic",
      nativeName: {
        fra: {
          official: "République centrafricaine",
          common: "République centrafricaine",
        },
        sag: {
          official: "Ködörösêse tî Bêafrîka",
          common: "Bêafrîka",
        },
      },
    },
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Bangui"],
    region: "Africa",
    flag: "🇨🇫",
  },
  {
    name: {
      common: "Hungary",
      official: "Hungary",
      nativeName: {
        hun: {
          official: "Magyarország",
          common: "Magyarország",
        },
      },
    },
    currencies: {
      HUF: {
        name: "Hungarian forint",
        symbol: "Ft",
      },
    },
    capital: ["Budapest"],
    region: "Europe",
    flag: "🇭🇺",
  },
  {
    name: {
      common: "Mongolia",
      official: "Mongolia",
      nativeName: {
        mon: {
          official: "Монгол улс",
          common: "Монгол улс",
        },
      },
    },
    currencies: {
      MNT: {
        name: "Mongolian tögrög",
        symbol: "₮",
      },
    },
    capital: ["Ulan Bator"],
    region: "Asia",
    flag: "🇲🇳",
  },
  {
    name: {
      common: "Saudi Arabia",
      official: "Kingdom of Saudi Arabia",
      nativeName: {
        ara: {
          official: "المملكة العربية السعودية",
          common: "العربية السعودية",
        },
      },
    },
    currencies: {
      SAR: {
        name: "Saudi riyal",
        symbol: "ر.س",
      },
    },
    capital: ["Riyadh"],
    region: "Asia",
    flag: "🇸🇦",
  },
  {
    name: {
      common: "Eswatini",
      official: "Kingdom of Eswatini",
      nativeName: {
        eng: {
          official: "Kingdom of Eswatini",
          common: "Eswatini",
        },
        ssw: {
          official: "Umbuso weSwatini",
          common: "eSwatini",
        },
      },
    },
    currencies: {
      SZL: {
        name: "Swazi lilangeni",
        symbol: "L",
      },
      ZAR: {
        name: "South African rand",
        symbol: "R",
      },
    },
    capital: ["Mbabane"],
    region: "Africa",
    flag: "🇸🇿",
  },
  {
    name: {
      common: "Uganda",
      official: "Republic of Uganda",
      nativeName: {
        eng: {
          official: "Republic of Uganda",
          common: "Uganda",
        },
        swa: {
          official: "Republic of Uganda",
          common: "Uganda",
        },
      },
    },
    currencies: {
      UGX: {
        name: "Ugandan shilling",
        symbol: "Sh",
      },
    },
    capital: ["Kampala"],
    region: "Africa",
    flag: "🇺🇬",
  },
  {
    name: {
      common: "Paraguay",
      official: "Republic of Paraguay",
      nativeName: {
        grn: {
          official: "Tetã Paraguái",
          common: "Paraguái",
        },
        spa: {
          official: "República de Paraguay",
          common: "Paraguay",
        },
      },
    },
    currencies: {
      PYG: {
        name: "Paraguayan guaraní",
        symbol: "₲",
      },
    },
    capital: ["Asunción"],
    region: "Americas",
    flag: "🇵🇾",
  },
  {
    name: {
      common: "Cameroon",
      official: "Republic of Cameroon",
      nativeName: {
        eng: {
          official: "Republic of Cameroon",
          common: "Cameroon",
        },
        fra: {
          official: "République du Cameroun",
          common: "Cameroun",
        },
      },
    },
    currencies: {
      XAF: {
        name: "Central African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Yaoundé"],
    region: "Africa",
    flag: "🇨🇲",
  },
  {
    name: {
      common: "France",
      official: "French Republic",
      nativeName: {
        fra: {
          official: "République française",
          common: "France",
        },
      },
    },
    currencies: {
      EUR: {
        name: "Euro",
        symbol: "€",
      },
    },
    capital: ["Paris"],
    region: "Europe",
    flag: "🇫🇷",
  },
  {
    name: {
      common: "Togo",
      official: "Togolese Republic",
      nativeName: {
        fra: {
          official: "République togolaise",
          common: "Togo",
        },
      },
    },
    currencies: {
      XOF: {
        name: "West African CFA franc",
        symbol: "Fr",
      },
    },
    capital: ["Lomé"],
    region: "Africa",
    flag: "🇹🇬",
  },
  {
    name: {
      common: "Mauritius",
      official: "Republic of Mauritius",
      nativeName: {
        eng: {
          official: "Republic of Mauritius",
          common: "Mauritius",
        },
        fra: {
          official: "République de Maurice",
          common: "Maurice",
        },
        mfe: {
          official: "Republik Moris",
          common: "Moris",
        },
      },
    },
    currencies: {
      MUR: {
        name: "Mauritian rupee",
        symbol: "₨",
      },
    },
    capital: ["Port Louis"],
    region: "Africa",
    flag: "🇲🇺",
  },
  {
    name: {
      common: "Cook Islands",
      official: "Cook Islands",
      nativeName: {
        eng: {
          official: "Cook Islands",
          common: "Cook Islands",
        },
        rar: {
          official: "Kūki 'Āirani",
          common: "Kūki 'Āirani",
        },
      },
    },
    currencies: {
      CKD: {
        name: "Cook Islands dollar",
        symbol: "$",
      },
      NZD: {
        name: "New Zealand dollar",
        symbol: "$",
      },
    },
    capital: ["Avarua"],
    region: "Oceania",
    flag: "🇨🇰",
  },
  {
    name: {
      common: "Palau",
      official: "Republic of Palau",
      nativeName: {
        eng: {
          official: "Republic of Palau",
          common: "Palau",
        },
        pau: {
          official: "Beluu er a Belau",
          common: "Belau",
        },
      },
    },
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    capital: ["Ngerulmud"],
    region: "Oceania",
    flag: "🇵🇼",
  },
];
let countriesList = document.querySelectorAll(".ger");

for (let i = 0; i < 20; i++) {
  countriesList[i].querySelector(".title").textContent =
    countries[i].name.common;
  countriesList[i].querySelector(".data__lists").textContent =
    countries[i].region;
  countriesList[i].querySelector(".data__capital-text").textContent =
    countries[i].capital;
}
