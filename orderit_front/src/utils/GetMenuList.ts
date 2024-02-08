function GetMenuList(setMenuList: (menuList: any) => void) {
  let tmpMenuList = {
    'Coffee': {
      '에스프레소': {
        'HOT/ICE 여부': 'HOT ONLY',
        '샷 추가 여부': 'N',
        '디카페인 여부': 'N',
        '사이즈업 여부': 'N',
        price: 1000
      },
      '아메리카노': {
        'HOT/ICE 여부': 'Y',
        '샷 추가 여부': 'Y',
        '디카페인 여부': 'Y',
        '사이즈업 여부': 'Y',
        price: 2000
      },
      '에스프레소2': {
        'HOT/ICE 여부': 'HOT ONLY',
        '샷 추가 여부': 'N',
        '디카페인 여부': 'N',
        '사이즈업 여부': 'N',
        price: 1000
      },
      '아메리카노2': {
        'HOT/ICE 여부': 'Y',
        '샷 추가 여부': 'Y',
        '디카페인 여부': 'Y',
        '사이즈업 여부': 'Y',
        price: 2000
      },
      '에스프레소3': {
        'HOT/ICE 여부': 'HOT ONLY',
        '샷 추가 여부': 'N',
        '디카페인 여부': 'N',
        '사이즈업 여부': 'N',
        price: 1000
      },
      '아메리카노3': {
        'HOT/ICE 여부': 'Y',
        '샷 추가 여부': 'Y',
        '디카페인 여부': 'Y',
        '사이즈업 여부': 'Y',
        price: 2000
      }
    },
    'NonCoffee': {
      '그린티 라떼': {
        'HOT/ICE 여부': 'ICE ONLY',
        '샷 추가 여부': 'N',
        '디카페인 여부': 'N',
        '사이즈업 여부': 'Y',
        price: 3000
      },
      '레몬 에이드': {
        'HOT/ICE 여부': 'ICE ONLY',
        '샷 추가 여부': 'N',
        '디카페인 여부': 'N',
        '사이즈업 여부': 'Y',
        price: 4000
      }
    },
    'Dessert': {
      '레드벨벳케이크': {
        'HOT/ICE 여부': 'X',
        '샷 추가 여부': 'X',
        '디카페인 여부': 'X',
        '사이즈업 여부': 'N',
        price: 5000
      },
      '롤 케이크': {
        'HOT/ICE 여부': 'X',
        '샷 추가 여부': 'X',
        '디카페인 여부': 'X',
        '사이즈업 여부': 'N',
        price: 6000
      }
    }
  };

  setMenuList(tmpMenuList);
}

export default GetMenuList;
