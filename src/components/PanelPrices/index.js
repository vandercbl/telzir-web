import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { FaRegTrashAlt } from 'react-icons/fa'

import {
	getListPriceDDDFetch,
	addPriceDDDFetch,
	deletePriceDDDFetch,
} from '../../store/fetchAction/priceDDD'

import Table from '../Table'
import { PagePanelPrices, ListPrices, NewPrices } from './styles'

function PanelPlans() {
	const dispatch = useDispatch()
	const prices = useSelector((state) => state.priceDDD.list)
	const messageRequest = useSelector((state) => state.priceDDD.messageRequest)
	const [viewBox, setViewBox] = useState(false)

	useEffect(() => {
		dispatch(getListPriceDDDFetch())
	}, [dispatch])

	const formInitialValues = {
		origin: '',
		destiny: '',
		price: '',
	}

	const schemaPrice = yup.object().shape({
		origin: yup
			.string()
			.notOneOf([yup.ref('destiny')], 'DDDs não podem ser iguais')
			.required('Origem obrigatório'),
		destiny: yup
			.string()
			.notOneOf([yup.ref('origin')], 'DDDs não podem ser iguais')
			.required('Destino obrigatório'),
		price: yup
			.number()
			.typeError('Digite apenas números')
			.required('Preço obrigatório'),
	})

	const handlSubmit = useCallback(
		async (values) => {
			dispatch(addPriceDDDFetch(values))
		},
		[dispatch],
	)

	const handleToogleView = useCallback(() => {
		viewBox === true ? setViewBox(false) : setViewBox(true)
	}, [viewBox])

	const handleDelete = useCallback(
		(id) => {
			console.log(id)
			dispatch(deletePriceDDDFetch(id))
		},
		[dispatch],
	)

	return (
		<PagePanelPrices>
			<h1>
				Preços DDD
				<button onClick={handleToogleView} disabled={viewBox}>
					Incluir
				</button>
			</h1>

			<NewPrices active={viewBox}>
				<Formik
					initialValues={formInitialValues}
					onSubmit={handlSubmit}
					validationSchema={schemaPrice}
				>
					{(Formik) => {
						return (
							<>
								<Form className="formSimulator">
									<div className="field">
										<label>Origem</label>
										<Field type="text" name="origin" maxLength="3" />
										<ErrorMessage name="origin" component="span" />
									</div>
									<div className="field">
										<label>Destino</label>
										<Field type="text" name="destiny" maxLength="3" />
										<ErrorMessage name="destiny" component="span" />
									</div>
									<div className="field">
										<label>Preço</label>
										<Field type="text" name="price" placeholder="Ex.: 1.95" />
										<ErrorMessage name="price" component="span" />
									</div>
									<button type="submit">Registrar</button>
									<button
										type="button"
										onClick={handleToogleView}
										className="secundary"
									>
										Fechar
									</button>
									<p className="info">{messageRequest}</p>
								</Form>
							</>
						)
					}}
				</Formik>
			</NewPrices>

			<ListPrices>
				<Table>
					<thead>
						<tr>
							<th>Origem</th>
							<th>Destino</th>
							<th>$/min</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{prices.map((item, index) => (
							<tr key={item._id + index}>
								<td>{item.origin}</td>
								<td>{item.destiny}</td>
								<td>{item.price}</td>
								<td className="delete">
									<FaRegTrashAlt
										title="Excluir"
										onClick={() => handleDelete(item._id)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</ListPrices>
		</PagePanelPrices>
	)
}

export default PanelPlans
