export const actAPI = async (actNumber) => {
  const acts = [{
    actNumber: 'ACT-001',
    removalAndRegistrationDate: '2023-04-14T10:14',
    violationType: 'Порушення 3.1',
    actionStatus: 'Врізка',
    meterSize: 'G-2.5',
    region: 'Київська область',
    department: 'Київо-святошинське відділеня',
    city: 'Боярка',
    street: 'Полярна',
    house: '2',
    apartment: '12',
    structure: 'Метрологія',
    central_comisiya: true,
    contragent: {
      osoba_type: 'Фізична особа',
      PIB: 'Іваненко Олег Петрович',
      PIB_predstavnyka: 'Дмитров Богдан Дмитрович',
      spozyvachtype: 'Cпоживач',
      dani_lichilnyka: '123123123'
    }
  },
    {
      actNumber: 'ACT-002',
      removalAndRegistrationDate: '2022-02-14T10:17',
      violationType: 'Порушення 1.2',
      actionStatus: 'Заглушка',
      meterSize: 'G-1.6',
      region: 'Київська область',
      department: 'Київо-святошинське відділеня',
      city: 'Боярка',
      street: 'Варшавська',
      structure: 'АДС',
      house: '88',
      apartment: '112',
      central_comisiya: true,
      contragent: {
        osoba_type: 'Юридична особа',
        nazva_yuridichna_osoba: 'ТОВ «ВЕСЕЛКА»',
        EDRPO: '2342304234',
        spozyvachtype: 'Cпоживач'
      }
    }, {
      actNumber: 'ACT-003',
      removalAndRegistrationDate: '2021-02-14T10:17',
      violationType: 'Порушення 1.5',
      actionStatus: 'Опломбовано',
      meterSize: 'G-1.6',
      department: 'Києво-Святошинське відділення, дільниця № 1',
      region: 'Київська область',
      city: 'Боярка',
      house: '1',
      apartment: '31',
      structure: 'ВЕБ',
      central_comisiya: false,
      contragent: {
        osoba_type: 'Фізична особа',
        PIB: 'Іваненко Олег Петрович',
        PIB_predstavnyka: 'Дмитров Богдан Дмитрович',
        spozyvachtype: 'Cпоживач',
        dani_lichilnyka: '1341412143'
      }
    }, {
      actNumber: 'ACT-004',
      removalAndRegistrationDate: '2020-02-14T10:17',
      violationType: 'Порушення 1.6',
      actionStatus: 'Врізка',
      meterSize: 'G-1.6',
      department: 'Києво-Святошинське відділення, дільниця № 2',
      region: 'Київська область',
      city: 'Боярка',
      house: '28',
      apartment: '12',
      structure: 'ВЕБ',
      central_comisiya: true,
      contragent: {
        osoba_type: 'Фізична особа',
        PIB: 'Гулєєв Роман Вікторович',
        PIB_predstavnyka: 'Коваленко Ігор Вікторович',
        spozyvachtype: 'Cпоживач',
        dani_lichilnyka: '12567677Є'
      }
    }, {
      actNumber: 'ACT-005',
      removalAndRegistrationDate: '2019-02-14T10:17',
      violationType: 'Порушення 1.7',
      actionStatus: 'Врізка',
      meterSize: 'G-4',
      department: 'Києво-Святошинське відділення, дільниця № 3',
      region: 'Київська область',
      city: 'Боярка',
      house: '3',
      apartment: '32',
      structure: 'Метрологія',
      central_comisiya: false,
      contragent: {
        osoba_type: 'Юридична особа', nazva_yuridichna_osoba: 'ТОВ «БУДМАЙСТЕР»', EDRPO: '3455342321'
      }
    }, {
      actNumber: 'ACT-006',
      removalAndRegistrationDate: '2023-04-14T10:14',
      violationType: 'Порушення 3.1',
      actionStatus: 'Врізка',
      meterSize: 'G-2.5',
      region: 'Київська область',
      department: 'Київо-святошинське відділеня',
      city: 'Боярка',
      street: 'Полярна',
      house: '2',
      apartment: '12',
      structure: 'Метрологія',
      central_comisiya: true,
      contragent: {
        osoba_type: 'Фізична особа',
        PIB: 'Іваненко Олег Петрович',
        PIB_predstavnyka: 'Дмитров Богдан Дмитрович',
        spozyvachtype: 'Cпоживач',
        dani_lichilnyka: '123123123'
      }
    }, {
      actNumber: 'ACT-007',
      removalAndRegistrationDate: '2023-04-14T10:14',
      violationType: 'Порушення 3.1',
      actionStatus: 'Врізка',
      meterSize: 'G-2.5',
      region: 'Київська область',
      department: 'Київо-святошинське відділеня',
      city: 'Боярка',
      street: 'Полярна',
      house: '2',
      apartment: '12',
      structure: 'Метрологія',
      central_comisiya: true,
      contragent: {
        osoba_type: 'Фізична особа',
        PIB: 'Іваненко Олег Петрович',
        PIB_predstavnyka: 'Дмитров Богдан Дмитрович',
        spozyvachtype: 'Cпоживач',
        dani_lichilnyka: '123123123'
      }
    }, {
      actNumber: 'ACT-008',
      removalAndRegistrationDate: '2016-02-14T10:17',
      violationType: 'Порушення 3.1',
      actionStatus: 'Блінда',
      meterSize: 'G-2.5',
      department: 'Києво-Святошинське відділення, дільниця № 1',
      region: 'Київська область',
      city: 'Ірпінь',
      house: '1',
      apartment: '24',
      structure: 'Облік',
      central_comisiya: true,
      contragent: {
        osoba_type: 'Фізична особа',
        PIB: 'Шевченко Олександра Андріївна',
        PIB_predstavnyka: 'Сидоренко Максим Ігорович',
        spozyvachtype: 'Cпоживач',
        dani_lichilnyka: '1256769'
      }
    }, {
      actNumber: 'ACT-009',
      removalAndRegistrationDate: '2015-02-14T10:17',
      violationType: 'Порушення 3.2',
      actionStatus: 'Блінда',
      meterSize: 'G-2.5',
      department: 'Києво-Святошинське відділення, дільниця № 2',
      region: 'Київська область',
      city: 'Ірпінь',
      house: '11',
      apartment: '54',
      structure: 'Метрологія',
      central_comisiya: true,
      contragent: {
        osoba_type: 'Фізична особа',
        PIB: 'Петренко Юлія Вікторівна',
        PIB_predstavnyka: 'Коваль Ігор Іванович',
        spozyvachtype: 'Cпоживач',
        dani_lichilnyka: '127984'
      }
    }, {
      actNumber: 'ACT-010',
      removalAndRegistrationDate: '2014-02-14T10:17',
      violationType: 'Порушення 3.3',
      actionStatus: 'Блінда',
      meterSize: 'G-2.5',
      department: 'Києво-Святошинське відділення, дільниця № 3',
      region: 'Київська область',
      city: 'Ірпінь',
      house: '3',
      apartment: '7',
      structure: 'АДС',
      central_comisiya: false,
      contragent: {
        osoba_type: 'Юридична особа', nazva_yuridichna_osoba: 'ТОВ «НАШ ДІМ»', EDRPO: '7575567890'
      }
    }, {
      actNumber: 'ACT-011',
      removalAndRegistrationDate: '2013-02-14T10:17',
      violationType: 'Порушення 3.4',
      actionStatus: 'Блінда',
      meterSize: 'G-2.5',
      department: 'Києво-Святошинське відділення, дільниця № 4',
      region: 'Київська область',
      city: 'Ірпінь',
      house: '4',
      apartment: '87',
      contragent: {
        osoba_type: 'Юридична особа',
        nazva_yuridichna_osoba: 'ТОВ «ВЕСЕЛКА»',
        EDRPO: '2342304234',
        spozyvachtype: 'Cпоживач'
      }

    }, {
      actNumber: 'ACT-012',
      removalAndRegistrationDate: '2022-02-14T10:17',
      violationType: 'Порушення 1.2',
      actionStatus: 'Заглушка',
      meterSize: 'G-1.6',
      department: 'Білоцерківське відділення, дільниця № 2',
      region: 'Київська область',
      city: 'Біла Церква',
      house: '5',
      apartment: '63',
      contragent: {
        osoba_type: 'Юридична особа',
        nazva_yuridichna_osoba: 'ТОВ «ВЕСЕЛКА»',
        EDRPO: '2342304234',
        spozyvachtype: 'Cпоживач'
      }
    }, {
      actNumber: 'ACT-013',
      removalAndRegistrationDate: '2021-02-14T10:17',
      violationType: 'Порушення 1.5',
      actionStatus: 'Опломбовано',
      meterSize: 'G-1.6',
      department: 'Києво-Святошинське відділення, дільниця № 1',
      region: 'Київська область',
      city: 'Боярка',
      house: '90',
      apartment: '234',
      contragent: {
        osoba_type: 'Юридична особа',
        nazva_yuridichna_osoba: 'ТОВ «ВЕСЕЛКА»',
        EDRPO: '2342304234',
        spozyvachtype: 'Cпоживач'
      }
    }, {
      actNumber: 'ACT-014',
      removalAndRegistrationDate: '2020-02-14T10:17',
      violationType: 'Порушення 1.6',
      actionStatus: 'Врізка',
      meterSize: 'G-1.6',
      department: 'Києво-Святошинське відділення, дільниця № 2',
      region: 'Київська область',
      city: 'Боярка',
      house: '2',
      apartment: '52'
    }, {
      actNumber: 'ACT-015',
      removalAndRegistrationDate: '2019-02-14T10:17',
      violationType: 'Порушення 1.7',
      actionStatus: 'Врізка',
      meterSize: 'G-4',
      department: 'Києво-Святошинське відділення, дільниця № 3',
      region: 'Київська область',
      city: 'Боярка',
      house: '103',
      apartment: '52'
    }, {
      actNumber: 'ACT-016',
      removalAndRegistrationDate: '2018-02-14T10:17',
      violationType: 'Порушення 1.8',
      actionStatus: 'Врізка',
      meterSize: 'G-2.5',
      department: 'Києво-Святошинське відділення, дільниця № 4',
      region: 'Київська область',
      city: 'Боярка',
      house: '34',
      apartment: '88',
      contragent: {
        osoba_type: 'Не встановлена особа', spozyvachtype: 'Не споживач'
      }
    }]
  const getActByNumber = async (actNumber) => {
    const acts = await actAPI();
    const foundAct = acts.find((act) => act.actNumber === actNumber);
    return foundAct;
  };
}

