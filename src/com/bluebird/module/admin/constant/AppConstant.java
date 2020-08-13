package com.bluebird.module.admin.constant;


import java.io.Serializable;
import java.math.BigDecimal;

/**
 * 应用系统变量
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-5-30 17:22
 */
public final class AppConstant implements Serializable{
	
	
	//app 图片访问更目录
	public static String HttpBasePah;   //访问的根域名ss
	
	
	
    //系统
    public static Integer birthdayDay;//设置生日优惠券有效天数

    public static Integer birthdayMoney;//设置生日优惠券抵扣金额

    public static Integer marryDay;//设置结婚纪念日优惠券有效天数

    public static Integer marryMoney;//设置结婚纪念日优惠券抵扣金额

    public static Integer maxPayTime;//消费者超时未支付自动取消订单时间

    public static Integer signDay;//发货后,未操作签收,系统默认签收时间

    public static Integer evaluateDay;//订单完成未评价,系统默评价时间

    public static Float evaluateScore;//订单完成未评价,系统默评价分数

    public static String adminEmail;//平台客服邮箱

    public static String adminTel;//平台咨询电话

    public static String adminQQ;//平台客服QQ

    public static String statsTel;//统计数据接收手机号码

    public static String bankOfDeposit;//平台接收商户保证金的开户行

    public static String platformAccount;//平台接收商户保证金的账户信息

    public static String bankAccount;//平台接收商户保证金的银行账号

    public static BigDecimal merchantFee;//商家收入手续费

    public static BigDecimal userFee;//用户收益手续费

    public static BigDecimal taxRate1;//税率1

    public static BigDecimal taxRate2;//税率2

    public static BigDecimal taxRate3;//税率3

    public static BigDecimal taxRate4;//税率4

    public static BigDecimal taxRate5;//税率5

    public static BigDecimal PMF;//平台管理费

    public static BigDecimal otherFee;//其他费用百分比

    public static BigDecimal reserveGold;//备用金百分比

    public static BigDecimal userBenefit;//用户收益百分比

    public static Integer maxRefundDays;//容许最大退款天数

    //会员
    public static Integer energy2RMB;//动能量兑换人民币比例

    public static Integer registerGiveEnergy=0;//注册赠送动能量数量

    public static Integer refereeNumber;//会员推荐多少人后可以提升会员等级

    public static Integer totalEnergy;//会员累计多少动能量后可以提升会员等级

    public static Double DROR;//会员初始收益率

    public static Double MROR;//允许会员达到的最大收益率

    public static Double AUC;//会员初始活跃度系数

    public static  Double userReturnRate;//用户固有收益率

    public static Double memberReturnRate;//收益率增长数

    public static Integer clearEnergyDay;//会员在多少天数未登录则动能量归0

    public static Integer sendClearDay;//多少天未登录发送提醒清除动能量短信

    
    //商户
    public static Integer sellerAP;//商城默认账期(最大允许退货日期)

    public static Integer serverAp;//生活服务默认账期

    public static Integer minSellerAP;//商城最小账期

    public static Integer minServerAp;//生活服务最小账

    public static Double DCR;//商户默认减免的佣金率

    public static Double MCR;//商户最大减免佣金率

    public static Double cautionMoney;//商家入驻商家保证金

    public static Integer refereeSeller;//推荐多少商户入驻减少1%佣金率

    public static Double sellerReturnRate;//推荐减免佣金点数

    //app端
    public static Integer appPageSize=10;//APP端列表每页显示数据量 默认10

    public static Integer popularShop=10;//生活服务人气店铺推荐数量 默认10

    public static Integer hotNumber=30;//热门推荐商品数量 默认30

    public static Integer promotionNumber=30;//促销推荐商家数量 默认30

    public static Integer maxCreateGroup=5;//会员最多可以创建的群组数量 默认5

    public static Integer groupMaxMemberNumber=25;//群组被最大包含人员数量 默认25

    public static Integer nearbyGroupNumber=10;//每次读取最近的群组数量 默认10

    public static Integer groupMaxRange=40000;//推荐群组极限距离(单位米) 默认10000

}
