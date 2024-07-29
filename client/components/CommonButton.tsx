import { 
     Dimensions,
     Text, 
     TouchableOpacity 
} from 'react-native'
import React, { ReactElement } from 'react'

type buttonProps = {
     title: string | ReactElement,
     customButtonStyles: object,
     customTextStyles: object,
     handleSubmit: ()=> void
}
const CommonButton = ({title, customButtonStyles, customTextStyles, handleSubmit}: buttonProps) => {
  const {width} = Dimensions.get("window");
  return (
    <TouchableOpacity onPress={handleSubmit} style={{...customButtonStyles, width: width * 1 - 80}}>
     <Text style={{...customTextStyles}}>
          {title}
     </Text>
    </TouchableOpacity>
  )
}

export default CommonButton

