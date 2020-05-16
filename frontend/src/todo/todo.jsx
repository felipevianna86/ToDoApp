import React from 'react'

import PageHeader from '../template/pageHeader'
import Form from './todoForm'
import List from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' ></PageHeader>
        <Form />
        <List />
    </div>
)