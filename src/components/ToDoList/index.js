import React, { useState } from 'react';
import { Layout, Row, Col, Input, Button, Tag } from "antd";

const { Content } = Layout;

const ToDoList = () => {
	const [ list, setList ] = useState( [] )
	const [ todoString, setTodoString ] = useState( '' )

	const setInputToList = () => {
		const newTodoList = [ ...list, todoString ]
		setTodoString( '' )
		setList( newTodoList )
	}

	const removeToDo = number => {
		const newList = [ ...list ]
		newList.splice( number, 1 )
		setList( newList )
	}

	return (
		<Layout>
			<Content>
				<Row style={ { height : '50px', display : 'flex', alignItems : 'center' } }>
					<Col offset={ 6 } span={ 8 }>
						<Input placeholder="請輸入代辦事項"
						       onChange={ ( e ) => setTodoString( e.target.value ) }
						       value={ todoString }
						       onPressEnter={ () => setInputToList() }
						/>
					</Col>
					<Col span={ 4 }>
						<Button type="primary"
						        shape="round"
						        size={ 'small' }
						        onClick={ () => setInputToList() }
						>
							確定
						</Button>
					</Col>
				</Row>
				<Row style={ { padding : '10px 0' } }>
					<Col offset={ 6 } span={ 12 }>
						{
							list.map( ( str, index ) => {
								return (
									<Tag key={ index }
									     closable={ true }
									     onClose={ () => removeToDo( index ) }
									>
										{ str }
									</Tag>
								)
							} )
						}
					</Col>
				</Row>
			</Content>
		</Layout>
	);
};

export default ToDoList;