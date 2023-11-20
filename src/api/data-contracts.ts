/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AbsenceDto */
export interface AbsenceDto {
  /** 缺勤类型 */
  absenceType: string;
  /** 班级id */
  classId: string;
  /**
   * 请假具体事由
   * @minLength 0
   * @maxLength 256
   */
  definite: string;
  /**
   * 请假结束时间
   * @format date-time
   */
  endTime: string;
  /** 接送人id */
  parentId: string;
  /** 接送人Name */
  parentName: string;
  /** 学校id */
  schoolId: string;
  /**
   * 请假开始时间
   * @format date-time
   */
  startTime: string;
  /** 学生id */
  studentId: string;
  /** 学生name */
  studentName: string;
}

/**
 * AuthInfo
 * 第三方授权信息
 */
export interface AuthInfo {
  accessToken?: string;
  /** appToken，用于文件上传接口 */
  appToken?: string;
  /** 头像地址 */
  avatarUrl?: string;
  /** 绑定的孩子信息 */
  children?: Children[];
  /** 班级 */
  currentClass?: string;
  /** 所选学生id */
  currentStudent?: Children;
  /** 执教班级信息 */
  eclasses?: Eclass[];
  /** 年级 */
  grade?: string;
  /** 所属学段 */
  gradePhase?: string;
  /** id */
  id: string;
  /** 角色 00管理员，10区域老师，20教职工，40家长 */
  identity: string;
  /** 工号 */
  jobNo?: string;
  menuList?: MenuList[];
  /** 手机号 */
  mobile?: string;
  /** 姓名 */
  name: string;
  orgCode?: string;
  /** @format int64 */
  organizeId?: number;
  /** personId */
  personId: string;
  /** 在岗状态 */
  positionStatus?: string;
  /** 学校 ID */
  schoolId?: string;
  /** 学校名称 */
  schoolName?: string;
  /** 性别 1男，0女 */
  sex?: string;
  /** 任教学科 */
  teachingCourses?: string;
  xgkAuthInfo?: Record<string, object>;
  xgkToken?: string;
}

/** Children */
export interface Children {
  /** @format int32 */
  defaultBind?: number;
  eclassId?: string;
  eclassName?: string;
  relationship?: string;
  schoolId?: string;
  sex?: string;
  /** @format int32 */
  status?: number;
  studentId?: string;
  studentName?: string;
}

/** Eclass */
export interface Eclass {
  classIdTemp?: string;
  eclassId?: string;
  eclassName?: string;
  grade?: string;
  jobId?: string;
  jobName?: string;
  schoolId?: string;
}

/**
 * GetOrganPersonListEntity
 * 获取教育机构下人员列表参数
 */
export interface GetOrganPersonListEntity {
  /** 机构id */
  groupId: string;
  /** 手机号 */
  mobile?: string;
  /** 人员名称 */
  name?: string;
  /** 校内编号 */
  orgPartCode?: string;
}

/**
 * GetParentsRet
 * 家长联系人对象
 */
export interface GetParentsRet {
  /** 班级id */
  classId: string;
  /** 班级名 */
  className: string;
  /** 家长列表 */
  parents: ParentEntity[];
}

/** GetPersonListByOrgListAndPersonNameDto */
export interface GetPersonListByOrgListAndPersonNameDto {
  /**
   * 当前页数
   * @format int32
   */
  current?: number;
  /** 人员名称 */
  name?: string;
  /** 机构id集合 */
  orgCodeList?: string[];
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
}

/**
 * InteractionAddDto
 * 班级圈评论新增
 */
export interface InteractionAddDto {
  /** 班级id */
  classId: string;
  /**
   * 评论信息
   * @minLength 0
   * @maxLength 128
   */
  comment: string;
  /**
   * 班级圈id
   * @format int64
   */
  momentsId: number;
  /**
   * pid
   * @format int64
   */
  pid: number;
}

/**
 * LoginBody
 * 用户登录对象
 */
export interface LoginBody {
  /** accessToken */
  accessToken: string;
  /** 地址传入的appId */
  appId: string;
  /** 前端请求第三方接口获取的orgCode */
  orgCode: string;
  /** 前端请求第三方接口获取的personId */
  personId: string;
  /** 选择的学生id */
  studentId?: string;
  /** 前端请求第三方接口获取的token */
  token: string;
}

/** MenuList */
export interface MenuList {
  appAlias?: string;
  appId?: string;
  checkType?: string;
  children?: MenuList[];
  intSort?: string;
  level?: string;
  name?: string;
  sort?: string;
  spyCode?: string;
  spyParentCode?: string;
  uniqueKey?: string;
}

/**
 * MomentsAddDto
 * 班级圈新增
 */
export interface MomentsAddDto {
  /** 班级ids */
  classIds: string;
  /** 文字内容 */
  content: string;
  /**
   * 文件类型 1图片 2视频
   * @format int32
   */
  fileType: number;
  /** 图片视频地址 */
  fileUrl: string[];
  /**
   * 置顶时间类型 1,24小时 2,3天, 3,七天,  4,一月
   * @format int32
   */
  timeType: number;
  /**
   * 是否置顶 1 置顶 2 取消置顶
   * @format int32
   */
  top: number;
}

/**
 * ParentEntity
 * 家长联系人
 */
export interface ParentEntity {
  /** 子女人员id */
  childId: string;
  /** 子女名称 */
  childName: string;
  /** 父母名称 */
  name: string;
  /** 父母人员id */
  personId: string;
  /** 父母电话 */
  phone: string;
  /** 父母和子女关系 */
  relation: string;
  /** t_personID */
  t_personID: string;
  /** t_userID */
  t_userID: string;
}

/** R«AuthInfo» */
export interface RAuthInfo {
  /** @format int32 */
  code?: number;
  /** 第三方授权信息 */
  data?: AuthInfo;
  msg?: string;
}

/** R«List«GetParentsRet»» */
export interface RListGetParentsRet {
  /** @format int32 */
  code?: number;
  data?: GetParentsRet[];
  msg?: string;
}

/**
 * SysJob
 * 定时任务
 */
export interface SysJob {
  /** 是否并发执行（0允许 1禁止） */
  concurrent?: string;
  createBy?: string;
  createByName?: string;
  /** @format date-time */
  createTime?: string;
  /**
   * 执行表达式
   * @minLength 0
   * @maxLength 255
   */
  cronExpression?: string;
  /**
   * 调用目标字符串
   * @minLength 0
   * @maxLength 500
   */
  invokeTarget?: string;
  /** 任务组名 */
  jobGroup?: string;
  /**
   * 任务ID
   * @format int64
   */
  jobId?: number;
  /**
   * 任务名称
   * @minLength 0
   * @maxLength 64
   */
  jobName?: string;
  /** cron计划策略 */
  misfirePolicy?: string;
  params?: object;
  remark?: string;
  /** 任务状态（0正常 1暂停） */
  status?: string;
  updateBy?: string;
  /** @format date-time */
  updateTime?: string;
}

/**
 * TableDataInfo
 * 表格分页数据对象
 */
export interface TableDataInfo {
  /** @format int32 */
  code?: number;
  msg?: string;
  rows?: object[];
  /** @format int64 */
  total?: number;
}

/**
 * WebLoginBody
 * 用户登录对象
 */
export interface WebLoginBody {
  /** orgCode */
  orgCode: string;
  /** token */
  token: string;
}
