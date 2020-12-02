import * as React from 'react'

const Triumph: React.FC<{ size: string; color: string }> = ({ size, color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" version="1.1" id="svg870">
      <g id="layer1">
        <path
          id="path10"
          fill={color}
          fillRule="evenodd"
          stroke={color}
          strokeWidth="2"
          d="M 90.206611,2.3774458 C 86.326191,18.93685 81.087231,34.591067 73.694961,48.809235 56.644041,45.079809 42.881171,36.417853 29.187601,27.652387 38.536871,41.17553 46.936531,55.24155 50.344451,72.159749 36.410313,80.23523 20.397691,84.84656 3.9131742,88.6714 c 15.9342218,3.21827 31.3545068,9.00612 46.4312768,16.51166 -3.79189,16.46589 -12.30863,30.5696 -21.15685,44.50736 13.63143,-8.05577 26.00208,-17.16211 44.50736,-21.15634 10.88695,15.47711 11.8054,30.95419 16.51165,46.43128 4.50021,-15.62047 6.48365,-31.60047 16.511659,-46.43128 16.60719,4.39502 31.33239,11.61297 44.50736,21.15634 -10.73478,-14.3097 -16.35384,-29.35021 -21.15634,-44.50736 14.57497,-6.406015 28.57146,-13.3905 46.43128,-16.51166 C 160.47931,85.88835 145.24809,79.155207 130.06929,72.159749 134.30343,55.633157 142.8127,41.671698 151.22563,27.652387 137.07475,36.75924 122.57162,44.80977 106.71827,48.809235 98.627112,34.440971 94.266941,18.473211 90.206611,2.3774458 Z m -0.15554,63.0876222 a 22.206945,23.494301 0 0 1 0.12712,0 A 22.206945,23.494301 0 0 1 112.3851,88.95924 22.206945,23.494301 0 0 1 90.178191,112.45341 22.206945,23.494301 0 0 1 67.971281,88.95924 22.206945,23.494301 0 0 1 90.051071,65.465068 Z"
        />
        <circle fill="none" stroke="#000" strokeWidth="5" id="path17" cx="90.289803" cy="90.084366" r="88.029991" />
      </g>
    </svg>
  )
}

export { Triumph }
