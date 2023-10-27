import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cache";
const isExpiredInMinutes=5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if(!item)return null;

    const now =dayjs()
    const storedTime=dayjs(item.timestamp)
    const isExpired= now.diff(storedTime,'minute') > isExpiredInMinutes;

    if(isExpired){
        await AsyncStorage.removeItem(prefix+key)
        return null
    }

    return item.value

  } catch (error) {
    console.log(error)
  }
};

export default {
  store,
  get
};
