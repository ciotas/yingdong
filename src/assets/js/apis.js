import request from './request'

//登录模块，获取验证码接口
export const getTelCode = (data) => {
    return request({
        method: 'post',
        data,
        url: '/verificationCodes',
        token: false
    })
}

//tab部分，获取用户信息接口
export const getUserInfo = (params) => {
    return request({
        method: 'get',
        params,
        url: '/user',
        token: true
    })
}

//获取视频接口
export const getEpisodesList = (programId) => {
    return request({
        url: `/programs/${programId}`,
        params: {
            include: 'category,videos,types',
            source: 'web',
            token: true
        }
    })
}
