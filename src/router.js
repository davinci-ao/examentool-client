import Vue from 'vue'
import Router from 'vue-router'
import DeterminedExams from './views/DeterminedExams.index.vue'
import AssessmentsIndex from './views/assessment/Assessments.index.join.vue'
import AssessmentsStart from './views/assessment/Assessments.index.start.vue'
import AssessmentsNew from './views/assessment/Assessments.new.vue'
import AssessmentsJoin from './views/assessment/Assessments.join.vue'
import DeterminedExamAdd from './views/AddExam.index.vue'
import DeterminedExamEdit from './views/DeterminedExam.edit.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/determinedexam/',
        name: 'DeterminedExams',
        component: DeterminedExams
      },
      {
        path: '/determinedexam/:examId/edit',
        name: 'DeterminedExamEdit',
        component: DeterminedExamEdit
      },
      {
        path: '/assessments/join',
        name: 'AssessmentsIndex',
        component: AssessmentsIndex
      },
      {
        path: '/assessments/start',
        name: 'AssessmentsStart',
        component: AssessmentsStart
      },
      {
        path: '/assessments/:examId/start',
        name: 'AssessmentsNew',
        component: AssessmentsNew
      },
      {
        path: '/assessments/:examId',
        name: 'AssessmentsJoin',
        component: AssessmentsJoin
      },
      {
        path: '/determinedexam/add',
        name: 'DeterminedExamAdd',
        component: DeterminedExamAdd
      },
      {
        path: '/',
        name: 'Index',
        component: AssessmentsIndex
      },
  ]
});