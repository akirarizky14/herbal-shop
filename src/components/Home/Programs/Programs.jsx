import React from 'react'
import Cardprograms from './Cardprograms'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import '../../../css/Programs/Programs.css'
function Programs() {
  return (
    <div className='container-programs'>
        <div className="wrapper-programs">
          <div className="title-programs">
            <h1>ЧТО МЫ ПРЕДЛАГАЕМ</h1>
            <span>Это давно установленный факт, что читатель отвлекается на содержимое страницы при ее просмотре. Смысл использования Lorem ipsum заключается в том, чтобы имитировать текст и проверить внешний вид макета.</span>
          </div>
          <div className="programs">
            <Cardprograms
              image={<HealthAndSafetyIcon/>}
              title="БЕЗОПАСНОСТЬ ПЕРВЫМ"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            />
            <Cardprograms
              image={<HealthAndSafetyIcon/>}
              title="МАЛЫЕ ГРУППЫ"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            />
            <Cardprograms
              image={<HealthAndSafetyIcon/>}
              title="УХОД ЗА МЛАДЕНЦАМИ"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            />
            <Cardprograms
              image={<HealthAndSafetyIcon/>}
              title="ТВОРЧЕСКИЕ УРОКИ"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            />
            <Cardprograms
              image={<HealthAndSafetyIcon/>}
              title="СЕРТИФИЦИРОВАННЫЕ УЧИТЕЛИ"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            />
            <Cardprograms
              image={<HealthAndSafetyIcon/>}
              title="СЧАСТЛИВАЯ ОБСТАНОВКА"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            />
          </div>
        </div>
    </div>
  )
}

export default Programs