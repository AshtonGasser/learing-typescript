//in terminal run: parcel index.html
 /// <reference types="@types/google.maps" />
import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const customMap = new CustomMap('map');
const company = new Company()
const user = new User()
 customMap.addMarker(user)
 customMap.addMarker(company)


