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

import {
  AbsenceDto,
  GetOrganPersonListEntity,
  GetPersonListByOrgListAndPersonNameDto,
  InteractionAddDto,
  LoginBody,
  MomentsAddDto,
  RAuthInfo,
  RListGetParentsRet,
  SysJob,
  TableDataInfo,
  WebLoginBody,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 晨午检
   * @name GetUsingGet
   * @summary 缺勤详情获取
   * @request GET:/api/v1/absence
   * @secure
   */
  getUsingGet = (
    query: {
      /** 缺勤类型 */
      absenceType?: string;
      /** 班级id */
      classId?: string;
      /**
       * 页数
       * @format int32
       */
      pageNum?: number;
      /**
       * 分页大小
       * @format int32
       */
      pageSize?: number;
      /** 学校id */
      schoolId?: string;
      /**
       * 查询时间code
       * @format int32
       */
      startDateCode: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/absence`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 晨午检
   * @name AddUsingPost
   * @summary 缺勤上报
   * @request POST:/api/v1/absence
   * @secure
   */
  addUsingPost = (data: AbsenceDto[], params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/absence`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 晨午检
   * @name GetParentByStudentIdUsingGet
   * @summary 根据学生id获取学生家长
   * @request GET:/api/v1/absence/getParentByStudentId
   * @secure
   */
  getParentByStudentIdUsingGet = (
    query?: {
      /** studentId */
      studentId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/absence/getParentByStudentId`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 晨午检
   * @name GetStudentUsingGet
   * @summary 获取学生
   * @request GET:/api/v1/absence/getStudent
   * @secure
   */
  getStudentUsingGet = (
    query: {
      /** 班级id */
      classId: string;
      /**
       * 页数
       * @format int32
       */
      pageNum?: number;
      /**
       * 分页大小
       * @format int32
       */
      pageSize?: number;
      /** 学生名 */
      studentName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/absence/getStudent`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 晨午检
   * @name GetAttendanceCountUsingGet
   * @summary 考勤统计
   * @request GET:/api/v1/attendance/count/getAttendanceCount
   * @secure
   */
  getAttendanceCountUsingGet = (
    query?: {
      /** @format int32 */
      absenceType?: number;
      classId?: string;
      /** @format date */
      dateEnd?: string;
      /** @format date */
      dateStart?: string;
      /** @format int32 */
      dateType?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/attendance/count/getAttendanceCount`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 晨午检
   * @name GetAttendanceCurveUsingGet
   * @summary 考勤曲线图
   * @request GET:/api/v1/attendance/count/getAttendanceCurve
   * @secure
   */
  getAttendanceCurveUsingGet = (
    query?: {
      /** @format int32 */
      absenceType?: number;
      classId?: string;
      /** @format date */
      dateEnd?: string;
      /** @format date */
      dateStart?: string;
      /** @format int32 */
      dateType?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/attendance/count/getAttendanceCurve`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name FileDownloadUsingGet
   * @summary 通用下载请求
   * @request GET:/api/v1/common/download
   * @secure
   */
  fileDownloadUsingGet = (
    query?: {
      /** fileName */
      fileName?: string;
      /** delete */
      delete?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v1/common/download`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name ResourceDownloadUsingGet
   * @summary 本地资源通用下载
   * @request GET:/api/v1/common/download/resource
   * @secure
   */
  resourceDownloadUsingGet = (
    query?: {
      /** resource */
      resource?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/v1/common/download/resource`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetAdmBraPerListUsingPost
   * @summary 获取部门组织下人员列表
   * @request POST:/api/v1/common/getAdmBraPerList
   * @secure
   */
  getAdmBraPerListUsingPost = (
    query?: {
      /** orgCode */
      orgCode?: string;
      /** name */
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getAdmBraPerList`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetAdmOrgTreedUsingGet
   * @summary 获取部门组织树
   * @request GET:/api/v1/common/getAdmOrgTreed
   * @secure
   */
  getAdmOrgTreedUsingGet = (
    query?: {
      /** orgCode */
      orgCode?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getAdmOrgTreed`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetAllUsersUsingGet
   * @summary 查询机构所有用户 有缓存
   * @request GET:/api/v1/common/getAllUsers
   * @secure
   */
  getAllUsersUsingGet = (
    query?: {
      /** orgCode */
      orgCode?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getAllUsers`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetClassRoomListByPlaceIdUsingPost
   * @summary 根据（校区、楼栋、楼层，均可空）获取教室列表
   * @request POST:/api/v1/common/getClassRoomListByPlaceId
   * @secure
   */
  getClassRoomListByPlaceIdUsingPost = (
    query: {
      /**
       * type
       * @format int32
       */
      type: number;
      /** buildingId */
      buildingId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getClassRoomListByPlaceId`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetOrganPersonListUsingPost
   * @summary 获取教学机构人员信息
   * @request POST:/api/v1/common/getOrganPersonList
   * @secure
   */
  getOrganPersonListUsingPost = (data: GetOrganPersonListEntity, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getOrganPersonList`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetPersonListByOrganListWithPagesUsingPost
   * @summary 通过机构列表和人员名称查询人员列表(分页)
   * @request POST:/api/v1/common/getPersonListByOrganListWithPages
   * @secure
   */
  getPersonListByOrganListWithPagesUsingPost = (
    data: GetPersonListByOrgListAndPersonNameDto,
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getPersonListByOrganListWithPages`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetPlaceChildrenTreeUsingPost
   * @summary 根据buildingId查询子树信息
   * @request POST:/api/v1/common/getPlaceChildrenTree
   * @secure
   */
  getPlaceChildrenTreeUsingPost = (
    query: {
      /** buildingId */
      buildingId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getPlaceChildrenTree`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetPlaceTreeUsingGet
   * @summary 获取场所树
   * @request GET:/api/v1/common/getPlaceTree
   * @secure
   */
  getPlaceTreeUsingGet = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getPlaceTree`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name GetTeaOrgTreeUsingGet
   * @summary 获取教学机构树
   * @request GET:/api/v1/common/getTeaOrgTree
   * @secure
   */
  getTeaOrgTreeUsingGet = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/getTeaOrgTree`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name UploadFileUsingPost
   * @summary 通用上传请求（单个）
   * @request POST:/api/v1/common/upload
   * @secure
   */
  uploadFileUsingPost = (data: File, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 公共接口
   * @name UploadFilesUsingPost
   * @summary 通用上传请求（多个）
   * @request POST:/api/v1/common/uploads
   * @secure
   */
  uploadFilesUsingPost = (data: File, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/common/uploads`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 通讯录
   * @name ListParentUsingGet
   * @summary 查询家长联系人列表
   * @request GET:/api/v1/contacts/parent/list
   * @secure
   */
  listParentUsingGet = (
    query?: {
      /** searchWord */
      searchWord?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<RListGetParentsRet, void>({
      path: `/api/v1/contacts/parent/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 通讯录
   * @name ListTeacherUsingGet
   * @summary 查询教师联系人列表
   * @request GET:/api/v1/contacts/teacher/list
   * @secure
   */
  listTeacherUsingGet = (
    query?: {
      /** searchWord */
      searchWord?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/contacts/teacher/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈
   * @name AddUsingPost1
   * @summary 新增发布班级圈
   * @request POST:/api/v1/moments
   * @secure
   */
  addUsingPost1 = (data: MomentsAddDto, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/moments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈
   * @name AllClassUsingGet
   * @summary 查询我的有关所有班级
   * @request GET:/api/v1/moments/allClass
   * @secure
   */
  allClassUsingGet = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/moments/allClass`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈
   * @name ListUsingGet
   * @summary 查询班级圈列表
   * @request GET:/api/v1/moments/list
   * @secure
   */
  listUsingGet = (
    query: {
      /** 班级id */
      classId: string;
      /**
       * 页数
       * @format int32
       */
      pageNum?: number;
      /**
       * 分页大小
       * @format int32
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/moments/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈
   * @name RemoveUsingDelete
   * @summary 删除班级圈
   * @request DELETE:/api/v1/moments/{id}
   * @secure
   */
  removeUsingDelete = (id: number, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/moments/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈互动
   * @name AddUsingPost2
   * @summary 新增班级圈评论
   * @request POST:/api/v1/interaction
   * @secure
   */
  addUsingPost2 = (data: InteractionAddDto, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/interaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈互动
   * @name LikeUsingPost
   * @summary 班级圈点赞取消点赞
   * @request POST:/api/v1/interaction/like
   * @secure
   */
  likeUsingPost = (data: InteractionAddDto, params: RequestParams = {}) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/interaction/like`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈互动
   * @name ListUsingGet1
   * @summary 查询一级评论
   * @request GET:/api/v1/interaction/list
   * @secure
   */
  listUsingGet1 = (
    query: {
      /** 班级id */
      classId: string;
      /**
       * 班级圈id
       * @format int64
       */
      momentsId: number;
      /**
       * 页数
       * @format int32
       */
      pageNum?: number;
      /**
       * 分页大小
       * @format int32
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/interaction/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈互动
   * @name ListSecondUsingGet
   * @summary 查询二级评论
   * @request GET:/api/v1/interaction/secondList
   * @secure
   */
  listSecondUsingGet = (
    query: {
      /** 班级id */
      classId: string;
      /**
       * 班级圈id
       * @format int64
       */
      momentsId: number;
      /**
       * 页数
       * @format int32
       */
      pageNum?: number;
      /**
       * 分页大小
       * @format int32
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TableDataInfo, void>({
      path: `/api/v1/interaction/secondList`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 班级圈互动
   * @name RemoveUsingDelete1
   * @summary 删除班级圈评论
   * @request DELETE:/api/v1/interaction/{id}
   * @secure
   */
  removeUsingDelete1 = (id: number, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/interaction/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-dict-data-controller
   * @name DictTypeUsingGet
   * @summary 根据字典类型查询字典数据信息
   * @request GET:/api/v1/system/dict/data/type/{dictType}
   * @secure
   */
  dictTypeUsingGet = (dictType: string, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/system/dict/data/type/${dictType}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 调度任务信息操作处理
   * @name EditUsingPut
   * @summary 修改定时任务
   * @request PUT:/api/v1/monitor/job
   * @secure
   */
  editUsingPut = (data: SysJob, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/monitor/job`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 调度任务信息操作处理
   * @name AddUsingPost3
   * @summary 新增定时任务
   * @request POST:/api/v1/monitor/job
   * @secure
   */
  addUsingPost3 = (data: SysJob, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/monitor/job`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 调度任务信息操作处理
   * @name ChangeStatusUsingPut
   * @summary 定时任务状态修改
   * @request PUT:/api/v1/monitor/job/changeStatus
   * @secure
   */
  changeStatusUsingPut = (data: SysJob, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/monitor/job/changeStatus`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 调度任务信息操作处理
   * @name RunUsingPut
   * @summary 定时任务立即执行一次
   * @request PUT:/api/v1/monitor/job/run
   * @secure
   */
  runUsingPut = (data: SysJob, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/monitor/job/run`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 调度任务信息操作处理
   * @name RemoveUsingDelete2
   * @summary 删除定时任务
   * @request DELETE:/api/v1/monitor/job/{jobIds}
   * @secure
   */
  removeUsingDelete2 = (jobIds: string, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/monitor/job/${jobIds}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 登录验证
   * @name GetInfoUsingGet
   * @summary 获取用户信息
   * @request GET:/api/v1/getInfo
   * @secure
   */
  getInfoUsingGet = (params: RequestParams = {}) =>
    this.request<RAuthInfo, void>({
      path: `/api/v1/getInfo`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 登录验证
   * @name LoginUsingPost
   * @summary 登录
   * @request POST:/api/v1/login
   * @secure
   */
  loginUsingPost = (data: LoginBody, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 登录验证
   * @name WebLoginUsingPost
   * @summary 登录
   * @request POST:/api/v1/web/login
   * @secure
   */
  webLoginUsingPost = (data: WebLoginBody, params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/api/v1/web/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
