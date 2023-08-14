import { useMutation, useQuery } from '@tanstack/react-query'
import axios from '../API/axios'
import { useNavigate } from 'react-router-dom'
import { getActByNumber, getAllActs } from '../API/actAPI'
import { useEffect, useState } from 'react'

export const useAddAct = ({ onAddActSuccess }) => {
  const navigate = useNavigate()
  const addActQuery = useMutation({
    mutationFn: (data) => axios.post('https://jsonplaceholder.typicode.com/posts', data), onSuccess: (data) => {
      onAddActSuccess(data)
      navigate('/acts')
    },
    staleTime: Infinity,
    onError: (error) => {
      console.log(error)
    }
  })
  return {
    addAct: addActQuery.mutate
  }
}
export const useGetAct = ({ id }) => {
  const getActByNumberQuery = useQuery(['act', id], () =>
    getActByNumber({ id }
    ), { enabled: !!id, staleTime: 5000 }
  )
  console.log(getActByNumberQuery)
  return getActByNumberQuery
}

export  const useGetLabAct = ({ id }) => {
  const getLabAct = useQuery(['act', id], () =>
    getActByNumber({ id }
    ), { enabled: !!id, staleTime: 5000 }
  )
  console.log(getLabAct)
  return getLabAct
}
export const useGetActs = () => {
  const [searchValue, setSearchValue] = useState()
  const [perPage, setPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  const query = useQuery(['acts', perPage, currentPage, searchValue], () =>
    getAllActs({
      per_page: perPage,
      current_page: currentPage,
      search_value: searchValue,
    }))
  useEffect(() => {
    query.refetch().then()
  }, [searchValue, currentPage, perPage ])
  return {
    query,
    perPage,
    setPerPage,
    searchValue,
    setSearchValue,
    currentPage,
    setCurrentPage,
  }
}