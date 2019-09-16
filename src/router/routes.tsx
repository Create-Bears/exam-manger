import * as Loadable from 'react-loadable'
import * as React from 'react'

function loading() {
    return <div>loading...</div>
}
//一级页面
let Login = Loadable({
    loading: loading,
    loader: () => import('../views/Login')
})
let HomePage = Loadable({
    loading: loading,
    loader: () => import('../views/main/home')
})

//试卷管理
let AddList = Loadable({
    loading: loading,
    loader: () => import('../views/main/questionManage/addList')
})
let CheckTextQuestion = Loadable({
    loading: loading,
    loader: () => import('@/views/main/questionManage/checkTextQuestion')
})
let TextQuestion = Loadable({
    loading: loading,
    loader: () => import('../views/main/questionManage/textQuestion')
})
let Detail = Loadable({
    loading: loading,
    loader: () => import('../views/main/questionManage/detail')
})
let CheckTextEditor = Loadable({
    loading: loading,
    loader: () => import('../views/main/questionManage/checkTextEditor')
})

//用户管理
let UserShow = Loadable({
    loading: loading,
    loader: () => import('../views/main/UserManage/UserShow')
})
let AddUser = Loadable({
    loading: loading,
    loader: () => import('../views/main/UserManage/addUser')
})

//考试管理
let ExamManage = Loadable({
    loading: loading,
    loader: () => import('@/views/main/examManager/examManage/examManage')
})
let QuestionList = Loadable({
    loading: loading,
    loader: () => import('@/views/main/examManager/questionList')
})
let ExamQuestionDetail = Loadable({
    loading: loading,
    loader: () => import('@/views/main/examManager/examquestiondetail')
})
let AddExamList = Loadable({
    loading: loading,
    loader: () => import('@/views/main/examManager/addExamList')
})

//班级管理
let ClassManger = Loadable({
    loading: loading,
    loader: () => import('../views/main/ClassMange/classManger')
})
let ClassRoomer = Loadable({
    loading: loading,
    loader: () => import('../views/main/ClassMange/classRoomer')
})
let StudentManger = Loadable({
    loading: loading,
    loader: () => import('@/views/main/ClassMange/studentManger')
})

//待批班级
let WaitClass = Loadable({
    loading: loading,
    loader: () => import('../views/main/WillClass/waitClass')
})
let ExamDetail = Loadable({
    loading: loading,
    loader: () => import('../views/main/WillClass/examDetail')
})

let QuestionManage = Loadable({
    loading: loading,
    loader: () => import('@/views/main/questionManage')
})
let UserManage = Loadable({
    loading: loading,
    loader: () => import('@/views/main/UserManage')
})
let ExamManager = Loadable({
    loading: loading,
    loader: () => import('@/views/main/examManager')
})
let ClassMange = Loadable({
    loading: loading,
    loader: () => import('@/views/main/ClassMange')
})
let WillClass = Loadable({
    loading: loading,
    loader: () => import('@/views/main/WillClass')
})

let NoAuthority = Loadable({
    loading: loading,
    loader: () => import('@/views/main/Noauthority')
})
let Confirmauthority = Loadable({
    loading: loading,
    loader: () => import('@/views/main/Confirmauthority')
})

let routes = [
    {
        component: Login,
        path: '/login'
    },
    {
        children: [
            {
                path: '/home/question',
                title: 'menu.question.manger',
                component: QuestionManage,
                children: [
                    {
                        component: AddList,
                        title: 'menu.question.add',
                        view_id: 'main-addQuestions',
                        path: '/home/question/addlist'
                    },
                    {
                        component: CheckTextQuestion,
                        title: 'menu.question.search',
                        view_id: 'main-watchQuestions',
                        path: '/home/question/checkTextQuestion'
                    },
                    {
                        component: TextQuestion,
                        title: 'menu.question.kind',
                        view_id: 'main-questionsType',
                        path: '/home/question/textQuestion'
                    },
                    {
                        component: Detail,
                        path: '/home/question/detail/:id?'
                    },
                    {
                        component: CheckTextEditor,
                        path: '/home/question/checkTextEditor/:id?'
                    }
                ]
            },
            {
                path: '/home/usermanage',
                title: 'menu.user.manger',
                component: UserManage,
                children: [
                    {
                        component: UserShow,
                        title: 'menu.user.show',
                        view_id: 'main-showUser',
                        path: '/home/usermanage/usershow'
                    },
                    {
                        component: AddUser,
                        title: 'menu.user.add',
                        view_id: 'main-addUser',
                        path: '/home/usermanage/adduser'
                    }
                ]
            },
            {
                path: '/home/exammanager',
                title: 'menu.exam.manger',
                component: ExamManager,
                children: [
                    {
                        component: ExamManage,
                        title: 'menu.exam.add',
                        view_id: 'main-addExam',
                        path: '/home/exammanager/examManage'
                    },
                    {
                        component: QuestionList,
                        title: 'menu.exam.list',
                        view_id: 'main-examList',
                        path: '/home/exammanager/questionList'
                    },
                    {
                        component: ExamQuestionDetail,
                        path: '/home/exammanager/examQuestionDetail'
                    },
                    {
                        component: AddExamList,
                        path: '/home/exammanager/addExamList'
                    }
                ]
            },
            {
                path: '/home/classmange',
                title: 'menu.class.manger',
                component: ClassMange,
                children: [
                    {
                        component: ClassManger,
                        title: 'menu.class.manger',
                        view_id: 'main-grade',
                        path: '/home/classmange/classManger'
                    },
                    {
                        component: ClassRoomer,
                        title: 'menu.classroom.manger',
                        view_id: 'main-room',
                        path: '/home/classmange/classRoomer'
                    },
                    {
                        component: StudentManger,
                        title: 'menu.student.manger',
                        view_id: 'main-student',
                        path: '/home/classmange/studentManger'
                    }
                ]
            },
            {
                path: '/home/willclass',
                title: 'menu.read.manger',
                component: WillClass,
                children: [
                    {
                        component: WaitClass,
                        title: 'menu.read.waitclass',
                        view_id: 'main-examPaperClassmate',
                        path: '/home/willclass/waitClass'
                    },
                    {
                        component: ExamDetail,
                        path: '/home/willclass/examDetail/:id?'
                    }
                ]
            }
        ],
        component: HomePage,
        path: '/home'
    },
    {
        path: '/403',
        component: Confirmauthority
    },
    {
        path: '/404',
        component: NoAuthority
    },
    {
        from: '/',
        to: '/login'
    },
    {
        from: '*',
        to: '/404'
    }
]

export default routes
