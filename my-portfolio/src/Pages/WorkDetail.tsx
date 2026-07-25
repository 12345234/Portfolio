import{useParams,Link,Navigate} from'react-router-dom'
import type { ReactNode } from 'react'
import {
    FaArrowLeft,
    FaGithub,
    FaArrowUpRightFromSquare,
    FaImage,
    FaLocationDot,
} from 'react-icons/fa6'
import{
    works,
    CATEGORY_ICON,
    CATEGORY_ICON_FALLBACK,
}from '../data/portfolio'
import SafeImg from '../components/SafeImg'