package com.javaclimb.test.dao;

import com.javaclimb.test.domain.AdminGuanli;
import com.javaclimb.test.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;

/*用户*/
@Repository
public interface UserMapper {
    /*
    * 登录
    * */
    public int verifyPassword(String username, String password);
    /*
    * 增加
    * */
    public int insert(User user);

    /*
    * 修改
    * */
    public int update(User user);

    /*
    * 删除
    * */
    public int delete(Integer id);

    /*
    * 根据主键查询整个对象
    * */
    public User selectByPrimaryKey(Integer id);

    /*
    * 查询所有用户
    * */
    public List<User> allUser();

    /*
    * 根据用户名字模糊查询列表
    * */
    public List<User> userOfName(String name);


}
