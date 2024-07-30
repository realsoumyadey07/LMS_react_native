import { 
     useEffect, 
     useState 
} from 'react'
import axios from 'axios';
import { SERVER_URI } from '@/utils/uri';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUser = () => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(true);
     const [error, setError] = useState(true);
     useEffect(() => {
          const subscription = async () => {
               const accessToken = await AsyncStorage.getItem("access_token");
               const refreshToken = await AsyncStorage.getItem("refresh_token");
               try {
                    const res = await axios.get(`${SERVER_URI}/me`, {
                         headers: {
                              'access_token':accessToken,
                              'refresh_token':refreshToken,
                         }
                    });
                    setLoading(false);
                    setUser(res.data.user);
                    console.log(res.data.user);
               } catch (error: any) {
                    setError(error?.message);
                    setLoading(false);
                    console.log(error);
               }
          };
          subscription();
     }, [])
     return { loading, user, error }
}

export default useUser

