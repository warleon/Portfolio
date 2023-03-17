
import React from 'react';
import styled, { css } from 'styled-components';


const InputBox = css`
	--text-color :${({ theme: { text } }) => text};
	--bg-color :${({ theme: { neutral } }) => neutral}75;
	box-sizing: border-box;
	display: block;
	padding: 0 1em;
	width: 100%;
	border-radius: 5px;
	border-color:var(--text-color);
	background: var(--bg-color);
	flex-grow:1;
	border-width: 2px;
	color:var(--text-color)
`

const Input = styled.input`
	${InputBox};
	height: 2.75em;
`

const TextArea = styled.textarea`
	${InputBox};
	resize: vertical;
`
const Label = styled.label`
	display: block;
	font-family: Raleway, Helvetica, sans-serif;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 0.1em;
	margin: 0 0 0.7em 0;
	text-transform: uppercase;
`
const Field = styled.div`
	--text-color :${({ theme: { text } }) => text};
	width: 100% ;
	flex-grow: 0;
	flex-shrink: 0;
	display:flex;
	flex-direction:column;
	padding-top: 1.5em;
	color:var(--text-color)
`
const Fields = styled.div`
	padding: 0 1.5em 0 1.5em;
	width: calc(100% - 3em);
	display: flex;
	flex-wrap: wrap;
`


const StyledForm = styled.form`
	--text-color :${({ theme: { text } }) => text};
	color: var(--text-color);
	@media screen and (min-width: 720px) {
		width:70%;
		
	}
`


export default function Form(props) {

	return (
		<StyledForm method={props.method} action={props.action} >
			<Fields >
				{props.fields.map(
					(field, i) => (
						<Field key={i}>
							<Label htmlFor={field.name}>{field.name}</Label>
							{field.textArea ?
								<TextArea id={field.name} required={field.required} rows={field.rows} />
								: <Input type={field.type} id={field.name} required={field.required} ></Input>
							}
						</Field>
					)
				)}
				<Field>
					<Input type="submit" value={props.sendMessage} />
				</Field>
			</Fields>
		</StyledForm>
	);
}