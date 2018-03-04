export const APP_NAME = '学生课外活动管理系统'
export const WHITE_LIST = ['/login', '/404', '/noredirect', '/test', '/inform/detail/'] // 不重定向地址

export const TOKEN_KEY = 'TOKEN_ACTIVITIES'
export const AUTH_NAME = 'Authorization'
export const STATUS_OK = 200
export const STATUS_INVALID_TOKEN = 401 // TOKEN 过期
export const STATUS_UNAUTHORIZED = 402 // 未授权
export const scoreTypes = {
  ACTIVITY: 'activity',
  HONOR: 'honor',
  OFFICE: 'office',
  PRACTICE: 'practice',
  RESERVE: 'reserve',
  SKILL: 'skill',
  VOLUNTEER: 'volunteer'
}
export const stuExcelTplFields = ['学号', '姓名', '性别', '邮箱', '政治面貌', '入学时间', '班级id', '寝室id']
