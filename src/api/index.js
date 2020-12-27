import {get,post} from "./http"

//判断管理员是否登陆成功
export const getLoginStatus = (params) => post(`admin/login/status`,params);


//查询用户
export const getAllUser = ()=> get(`user/allUser`);
//添加用户
export const setUser = (params) => post(`user/add`,params);
//编辑用户
export const updateUser = (params) => post(`user/update`,params);
//删除用户
export const delUser = (id) => get(`user/delete?id=${id}`);

//查询管理员
export const getAllAdmin = ()=> get(`admin/allAdminGuanli`);
//添加管理员
export const setAdmin = (params) => post(`admin/add`,params);
//编辑管理员
export const updateAdmin = (params) => post(`admin/update`,params);
//删除管理员
export const delAdmin = (id) => get(`admin/delete?id=${id}`);

//查询垃圾信息
export const getAllGarbage = ()=> get(`garbage/allGarbage`);
//添加垃圾信息
export const setGarbage = (params) => post(`garbage/add`,params);
//编辑垃圾信息
export const updateGarbage = (params) => post(`garbage/update`,params);
//删除垃圾信息
export const delGarbage = (id) => get(`garbage/delete?id=${id}`);

