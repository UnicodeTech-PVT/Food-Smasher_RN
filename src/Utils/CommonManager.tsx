import { Alert, Linking, Share } from "react-native";

export default class CommonDataManager {
  static shared: CommonDataManager;
  
  _packageDetails: any;

  static getSharedInstance() {
    if (CommonDataManager.shared == null) {
      CommonDataManager.shared = new CommonDataManager();
    }
    return CommonDataManager.shared;
  }

  capitalizeFirstLetter = (str: any) => {
    if (!str) {
      return "";
    }
    let firstChar = str.charAt(0);
    return firstChar.toUpperCase() + str.slice(1);
  };
  
  
  truncateString = (str: any) => {
    if (!str) {
      return "";
    }
    let newStringArray = str.split(" ");
    let combinedString = "";
    newStringArray.map((el: any) => {
      combinedString = combinedString + (el == "" ? "" : el.trim() + " ");
    });
    return combinedString.trim();
  };

  isValidPhoneNumber = (number: String) => {
    return number?.trim()?.length == 10;
  };
  getCountryFlagCode = (str: string) => {
    const flagString = str.split("-");
    if (flagString[1]) {
      return flagString[1];
    } else {
      return "";
    }
  };

  validatePhoneNumber(phoneNumber: any) {
    let phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  }
  onShare = async (customOptions: any) => {
    try {
      const result = await Share.share(customOptions);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  multiObjSearchDataFun = (
    searchText: any,
    listData: any,
    key1: any,
    key2: any
  ) => {
    if (searchText && listData?.length > 0) {
      const newData = listData.filter(function (item: any) {
        let keyValue = {};
        if (key1 in item) {
          keyValue = item[key1];
        }
        let keyValue2 = "";
        if (key2 in keyValue) {
          keyValue2 = item[key2];
        }

        const itemData = keyValue2 ? keyValue2.toUpperCase() : "".toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return newData;
    }
  };

  capitalizeFirstLetterFromSentence = (txt = "") => {
    if (txt?.length > 0) {
      const arr = txt.split(" ");
      return arr.length == 0
        ? "-"
        : arr.length == 1
        ? txt.charAt(0).toUpperCase()
        : arr[0].charAt(0).toUpperCase() + arr[1].charAt(0).toUpperCase();
    } else {
      return "";
    }
  };



  // Accepts both with +1 numbers and without as well.
  formatUSNumber = (phoneNumberString: string) => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return "";
  };
  addPlusToNumber = (str: any) => {
    if (!str) {
      return "";
    }
    if (str.includes("+")) {
      return str;
    } else {
      return `+${str}`;
    }
  };
  // remove empty lines at the end and start of a string
  removeEmptyLines = (str: any) => {
    if (!str) return "";
    str = str.trim();
    return str.replace(/^\s+|\s+$/g, "");
  };

  generateUniqueImageName = () => {
    const timestamp = new Date().getTime(); // Current timestamp in milliseconds
    const randomString = Math.random().toString(36).substring(7); // Random string

    return `profileImg_${timestamp}_${randomString}.jpg`;
  };

  getFormattedPhoneNumber = (
    code: string,
    phone: string,
    ignoreCode = false
  ) => {
    if (!code || !phone) {
      return "";
    }
    let fullNumber = `${this.addPlusToNumber(code)}${phone}`;
    const customNumber = ignoreCode ? phone : fullNumber;
    if (
      CommonDataManager.getSharedInstance().addPlusToNumber(code) == "+1" &&
      phone.length >= 10
    ) {
      return this.formatUSNumber(customNumber);
    } else {
      return ignoreCode ? phone : `${this.addPlusToNumber(code)} ${phone}`;
    }
  };

  isEmailValid = (email: string) => {
    if (!email) {
      return false;
    }
    let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validEmailRegex.test(email.trim());
  };

  isPasswordValid = (password: string) => {
    return password?.trim()?.length >= 8;
  };

  isValidUrl = (url: string) => {
    const regex =
      /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?|[a-zA-Z]:\\[^\\\/\s]+(\\[^\\\/\s]+)*)$/i;
    return regex.test(url);
  };

  showPopUpWithOptions = (
    title: string,
    message: string,
    leftTitle: string,
    rightTitle: string,
    okPress: (type: number) => void
  ) => {
    Alert.alert(
      title,
      message,
      [
        { text: leftTitle, onPress: () => okPress(0) },
        { text: rightTitle, onPress: () => okPress(1) },
      ],
      { cancelable: false }
    );
  };
}
