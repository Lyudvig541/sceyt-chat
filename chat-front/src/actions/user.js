export const USER_INFO = "USER_INFO";

export const saveUserInfo = (userInfo) => {
    console.log(userInfo,9999999);
    return {
        type: USER_INFO,
        payload: userInfo,
    };
};
