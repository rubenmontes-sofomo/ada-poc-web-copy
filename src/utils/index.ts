import axios, { AxiosResponse } from 'axios'

const US_BASE_URL = 'https://cdn.contentstack.io/v3'
const CONTENT_STACK_DYNAMIC_API = 'api/contentstack'

export const getResponseContentStackCDN = async (urlPath: string) => {
  const url = `${US_BASE_URL}/${urlPath}?environment=${process.env.ENVIRONMENT}`
  const response = await axios.get(url, {
    headers: {
      api_key: process.env.API_KEY,
      access_token: process.env.DELIVERY_TOKEN,
      'Content-Type': 'application/json',
    },
  })
  return response
}

export const fetcher = async (urlPath: string) => {
  let data
  let error = ''

  try {
    const url = `${process.env.PUBLIC_URL}/${CONTENT_STACK_DYNAMIC_API}/${urlPath}`
    const response = await fetch(url)

    if (response.status !== 200) {
      throw new String('Something went wrong')
    }
    data = await response.json()
  } catch (error) {
    error = error
  }

  return {
    data,
    error,
  }
}

export const toSEOUrl = (str: string) => {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/&/g, '-and-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-*/, '')
    .replace(/-*$/, '')
}
