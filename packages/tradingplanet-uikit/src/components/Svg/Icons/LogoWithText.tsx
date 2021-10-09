import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const color = isDark ? "#1B7CC1" : "#000000";
  return (
    <Svg viewBox="0 0 3000 900" {...props}>
    <path fill={color} d="M586,260.6H250.8v130.7h116.4v400.6l0,0c70.3,0,127.3-58.5,127.3-130.7V393.9h105.1v238.5l0,0
      c64.2,0,116.3-53.4,116.3-119.3l0,0V393.8l0,0C715.9,320.2,657.7,260.6,586,260.6z"/>
    <path fill={color}  d="M372,122.8c37.1-13.6,76.1-20.9,115.5-21.7c7.7,40.7,46,67.3,85.6,59.4c20.7-4.1,38.6-17.1,49.3-35.8
      C724,163.4,803.7,246.4,839.9,351.2c0.9,2.5,1.7,5,2.5,7.6c-3-11.6-6.5-23.2-10.5-34.8C797,222.6,725.5,138.8,632.3,89.8
      c0-0.5,0.1-1,0.1-1.5c0.7-41.4-31.4-75.6-71.8-76.3c-25.4-0.5-49.2,12.6-62.8,34.5c-64.5-8.7-130.2-1.6-191.5,20.9
      C92,145.5-20,387.1,56.1,606.9c8.1,23.3,18.1,45.9,30,67.4c-24.2,45.9-7.5,103.2,37.2,128c24.1,13.4,52.7,15,78.2,4.5
      c106.2,79.3,247.4,105.2,380.4,56.7c69.2-25.1,130.5-68.8,177.6-126.6c-39.5,42.5-88.2,74.8-142.1,94.4
      C487,879,347.7,846.1,251.1,758c20.9-47.6,0.2-103.5-46.2-124.9c-11.4-5.2-23.6-8.1-36.1-8.3c-3.6-0.1-7.2,0.1-10.8,0.5
      c-3-7.3-5.9-14.7-8.5-22.2C81.7,407.4,181.3,192.4,372,122.8z"/>
    <path fill={color} d="M929.6,344v-67.4h159.7V344H1034v296.9h-49.3V344H929.6z"/>
    <path fill={color} d="M1215.8,352.8c-0.3,3.7-0.3,7.4,0,11c0.3,6.3,0.3,12.6-0.1,18.9c-0.5,6.6-1.2,13.1-2.3,19.5
      c-1.1,6.9-3.7,12.9-7.1,16.6c-4.1,4.4-8.9,6.6-13.7,6.2c-6.3-0.2-12.5,0.3-18.7,1.6c-4.2,0.9-8.3,3.5-11.8,7.8
      c-3.5,4.1-5.9,10.4-6.9,17.7c-1.3,10.3-1.8,20.7-1.7,31.2v166.1c-4.2-5-8.8-8.7-13.7-10.6c-5.7-2.6-10.5-4.6-14.4-5.9
      c-4.2-1.7-7.9-6-10.5-12.2c-3.1-6.7-4.6-16.5-4.6-29.3V452c0-2,0-4.8,0.1-8.6c0.2-5,0.5-10.1,1-15.1c0.6-6.5,1.6-13,2.9-19.2
      c1.5-7.1,3.6-13.8,6-20c2.7-6.9,6-13.1,9.8-18.1c4.5-5.8,9.5-10.2,14.9-12.9c6.6-3.6,13.4-5.4,20.3-5.2L1215.8,352.8L1215.8,352.8
      L1215.8,352.8z"/>
    <path fill={color} d="M1243.1,425.5c0-1.4-0.1-2.8-0.3-4.2c-0.2-3.4-0.3-6.7-0.1-10.1c0.1-4.8,0.4-9.5,0.9-14.3
      c0.6-5.3,1.6-10.4,2.9-15.3c1.4-5.5,3.3-10.4,5.8-14.5c2.9-4.5,6.2-7.9,9.8-10.1c4.7-2.9,9.6-4.3,14.6-4.2h8.1
      c5-0.4,10.1-0.4,15.4,0c5.3,0.4,10.6,0.8,15.8,1.3c5.2,0.5,10.4,2,15.4,4.4c4.9,2.4,9.6,5.4,14.3,8.9c4.6,3.5,8.8,8.6,12.4,14.8
      c8.4,14,14,32.5,16.3,52.7c1.6,13.5,2.4,27.2,2.3,41v57.1c0.1,13-0.8,26-2.6,38.7c-1.3,9.9-3.5,19.5-6.5,28.3
      c-2.6,7.3-5.9,13.8-9.6,19.2c-3.3,4.9-6.9,9-10.8,12.2c-3.8,2.8-7.7,4.9-11.7,6.2c-3.4,1.3-6.8,2.3-10.2,3c-2.4,0.3-5.2,0.5-8.5,0.5
      h-39.7c-0.6,0-1.4,0-2.6-0.2s-3.3-0.7-6.5-1.6c-3.1-0.9-6.1-2.1-9.1-3.9c-3.4-2.2-6.6-5-9.7-8.6c-3.4-3.8-6.5-8.5-9.1-14
      c-2.8-6.3-4.9-13.4-6.3-21.1c-1.8-9.3-2.7-19.2-2.6-29c-0.2-16.3,1.1-32.6,4-48c2.3-12.1,6.6-22.6,12.2-30.1
      c5.5-7.1,11.7-12.2,18.3-14.8c8.1-3,16.3-4.4,24.5-4.2c16.7,0,28.1-2,34.2-5.9c6-4,9.1-10.2,9.1-18.5c0-11.8-6.3-19.7-18.9-23.8
      c-13.2-4.2-26.7-5-40.1-2.6C1260.3,417.1,1249.9,420.6,1243.1,425.5z M1334.5,503.9c-1,2.2-2.1,4.3-3.3,6.2c-3,3.9-6.2,7.2-9.7,9.6
      c-4.9,3.9-10.2,6-15.6,5.9c-9.4,0-17,2.1-22.9,6.2c-5.9,4.2-8.8,10-8.8,17.7c-0.2,8.4,2.3,16.3,6.3,20.3c4.2,4.5,12.7,6.8,25.4,6.8
      c5.2,0,9.2,0,12-0.2c2.7-0.2,5.4-1.5,7.8-3.9c1.9-1.7,3.6-4,5.1-6.8c1.3-4,2.2-8.6,2.4-13.3c0.7-6.4,1-12.9,1.2-19.5
      C1334.5,526.7,1334.5,517,1334.5,503.9L1334.5,503.9z"/>
    <path fill={color} d="M1527.3,240.7c3.2,4,6.9,6.5,10.8,7.3c3.9,1,7.9,1.5,11.8,1.6c3.5,0,6.9,1,10.2,3c3.5,2.4,6.3,7.4,7.6,13.7
      c1.8,7.3,2.7,17.8,2.7,31.6v306.3c-0.2,0.4-1.1,2.4-2.7,5.9c-1.4,3.2-2.9,6.2-4.5,8.9c-2.3,3.5-4.8,6.5-7.5,8.9
      c-3.8,3.7-7.9,6.6-12.1,8.6c-5.9,2.5-11.9,4.5-17.9,5.7c-8.4,1.8-16.9,2.7-25.4,2.6c-29.6,0-50.8-11.5-63.7-34.6
      c-12.9-23-19.3-61.4-19.3-115c-0.2-18.9,1.4-37.8,4.6-55.8c2.6-14.8,6.7-28.4,12.2-40.2c5.1-10.4,11.2-19.2,18-26
      c6.6-6.7,13.7-11.6,21-14.5c7.3-2.8,14.7-4.2,22.2-4.2c14.8,0,25.4,4.2,31.7,12.5L1527.3,240.7z M1527.3,500.2v-73.7
      c-2.7-1.5-5.5-2.7-8.3-3.6c-3.7-1.2-7.4-2-11.1-2.4c-4.2-0.5-8.4-0.4-12.5,0.2c-4.2,0.9-8.4,2.9-12.2,6.2c-4.1,3.3-7.8,8-10.9,13.8
      c-3.4,6.9-6,15-7.5,23.8c-2,11.7-3,23.8-2.9,36.1c-0.2,11.8,1,23.4,3.5,34.3c3.4,16.9,11.2,29.6,20.9,34c4.3,2.4,8.7,3.9,13.2,4.7
      c4.3,0.6,8.6,0.3,12.8-0.5c4.6-0.9,7.8-1.7,9.6-2.4c1.8-0.7,3.5-1.3,5.1-2.1h0.3C1527.5,568.7,1527.5,545.9,1527.3,500.2z"/>
    <path fill={color} d="M1619.1,323c-8.9-16.2-8.9-42.4,0.1-58.5c9-16.2,23.5-16,32.5,0.2c8.9,16.2,8.9,42.4-0.1,58.5
      c-4.3,7.7-10.1,12.1-16.2,12.1C1629.3,335.3,1623.4,330.9,1619.1,323z M1656.7,404.7c0-17-1.5-29.2-4.6-36.6
      c-3.1-7.4-6.6-11.1-10.5-11.1s-8.7-0.5-14.4-1.3c-4.9-0.4-9.6-3.2-13.7-8v293.3c14,1.3,24.8-1.1,32.4-7.5c7.6-6.4,11.2-20,10.8-40.8
      L1656.7,404.7L1656.7,404.7z"/>
    <path fill={color} d="M1851.6,459.2v189c-5.8,0.7-11.5,0.6-17.3-0.2c-4.7-0.8-9.3-2.8-13.7-5.9c-4.1-2.8-7.5-8.3-9.5-15.4
      c-2.2-8.4-3.1-17.6-2.7-26.7V460.8c-2.9-25.2-15.9-35.3-39.2-30.1c-12.1,2.8-19.1,4.8-21,6.2c0.6,6.9,0.9,13.9,0.9,20.8v142.2
      c0.4,9.2-0.6,18.5-2.9,26.7c-2.1,7-5.4,12.5-9.5,15.4c-4.3,3.2-8.9,5.1-13.5,5.9c-5.8,0.9-11.5,0.9-17.3,0.2V395.5
      c0-22.5,20.1-34.6,60.2-36.4C1822.9,356.3,1851.4,389.7,1851.6,459.2z"/>
    <path fill={color} d="M1979.4,636.8c-7.3,0.7-14.5,0.6-21.8-0.5c-7.3-0.8-14.6-2.8-21.8-5.9c-6.7-3.3-13.2-8.2-19.2-14.5
      c-6.2-6.3-11.7-14.8-16.1-24.9c-4.7-11.5-8.2-24.5-10.4-38.2c-2.8-17.4-4.2-35.4-4-53.6c0-77.5,17.5-124.1,52.4-139.8
      c18.1-8.3,43.5-7.3,76.4,3c7.9,3.8,13.4,7.7,16.7,11.7c3.3,3.9,4.9,10.6,5,20v214.4c0.2,0.2,0.3,0.6,0.3,1
      c4.1,19.7,5.3,37.1,3.9,52.1c-1.2,14.1-4.4,27.5-9.2,38.9c-5.2,11.6-11.8,20.7-19.3,26.7c-8.4,7-17.2,12.2-26.2,15.3
      c-9.8,3.4-19.8,5-29.8,5c-9.6,0-18-0.6-25.2-1.8c-5.4-0.7-10.8-2.1-16.1-4.2c-3-1.2-5.9-2.9-8.7-5.2c-1.4-0.9-2.7-2.4-3.7-4.2
      c-0.2-0.6-0.4-1.3-0.7-1.8c0-29.4,2.5-46.6,7.4-51.7c4.9-5,17.3-5.8,37.3-2.3l9.8,1.6c16.1,0,28.5-4.1,37.2-12.2
      c8.6-8.1,11-18.9,7.2-32.4C1992.7,635,1985.6,636.1,1979.4,636.8z M1992.2,425c-2.5,0-6-0.1-10.7-0.2c-4.6-0.2-8.2-0.4-10.8-0.6
      c-3.3-0.2-6.6,0.1-9.9,0.6c-3.3,0.3-6.5,1.3-9.7,3c-2.7,1.7-5.4,3.7-7.9,6.2c-2.6,2.4-4.9,6-6.6,10.4c-1.7,5-3.1,10.4-3.9,16.1
      c-1.1,7.4-1.7,15.1-1.7,22.9c0,14.8,0.1,25.4,0.3,31.6c0.3,7.7,1,15.1,2,22.6c1.2,8.9,3,14.8,5.5,17.7c3.4,3.7,7,6.7,10.8,8.9
      c5.7,3.2,11.8,4.3,17.7,3.4c7.1-0.7,15.9-2.3,26.5-4.7V425.2L1992.2,425z"/>
    <path fill={color} d="M2230,388.1c0,24.6-4.9,48.3-14.7,71.2c-5.2,11.8-12.9,21.4-23.1,28.8c-10.2,7.4-22.4,11.1-36.5,11.1h-30.6V641
      h-49.3V276.5h79.8c23.4,0,41.7,10.9,54.8,32.7C2223.5,331,2230,357.3,2230,388.1z M2125,431.8h30.6c7.5,0,13.4-3.9,17.7-11.9
      c4.4-8.4,6.8-19.8,6.5-31.4c0.3-11.8-2.1-23.3-6.6-31.9c-4.6-8.4-11-12.9-17.6-12.5h-30.5L2125,431.8z"/>
    <path fill={color} d="M2295.4,592.6c0.4,20.7-3.2,34.4-10.8,40.8s-18.4,8.9-32.4,7.5V236c4.1,4.9,8.8,7.7,13.7,8
      c5.7,0.9,10.5,1.3,14.4,1.3s7.4,3.7,10.5,11.1s4.6,19.6,4.6,36.6V592.6z"/>
    <path fill={color} d="M2347.5,425.5c0-1.4-0.1-2.8-0.3-4.2c-0.2-3.4-0.3-6.7-0.1-10.1c0.1-4.8,0.4-9.5,0.9-14.3
      c0.6-5.3,1.6-10.4,2.9-15.3c1.4-5.5,3.3-10.4,5.8-14.5c2.9-4.5,6.2-7.9,9.8-10.1c4.7-2.9,9.6-4.3,14.5-4.2h8.1
      c5-0.4,10.1-0.4,15.4,0c5.3,0.4,10.6,0.8,15.8,1.3c5.2,0.5,10.4,2,15.4,4.4c4.9,2.4,9.6,5.4,14.3,8.9c4.6,3.5,8.8,8.6,12.4,14.8
      c3.8,6.5,7.1,14,9.8,22.1c3,9.5,5.2,19.9,6.5,30.6c1.6,13.5,2.4,27.2,2.3,41v57.1c0.1,13-0.8,26-2.6,38.7
      c-1.4,9.9-3.5,19.5-6.5,28.3c-2.6,7.3-5.9,13.8-9.7,19.2c-3.3,4.9-6.9,9-10.8,12.2c-3.8,2.8-7.7,4.9-11.7,6.2
      c-3.4,1.3-6.8,2.3-10.2,3c-2.4,0.3-5.2,0.5-8.5,0.5h-39.8c-0.6,0-1.5,0-2.6-0.2c-1.2-0.2-3.3-0.7-6.5-1.6c-3.1-0.9-6.1-2.1-9.1-3.9
      c-3.4-2.1-6.6-5-9.7-8.6c-3.4-3.8-6.5-8.5-9.1-14c-2.8-6.3-4.9-13.4-6.3-21.1c-1.8-9.3-2.7-19.2-2.6-29c-0.2-16.3,1.1-32.6,4-48
      c2.3-12,6.6-22.5,12.2-30.1c5.5-7.1,11.7-12.2,18.3-14.8c8.1-3,16.3-4.4,24.5-4.2c16.7,0,28.1-2,34.1-5.9c6.1-3.9,9.1-10.1,9.1-18.5
      c0-11.8-6.3-19.7-18.9-23.8c-13.2-4.2-26.7-5-40.1-2.6C2364.7,417.1,2354.3,420.6,2347.5,425.5z M2438.9,503.9
      c-1,2.2-2.1,4.3-3.3,6.2c-3,3.9-6.2,7.2-9.6,9.6c-4.9,3.9-10.2,6-15.6,5.9c-9.4,0-17.1,2.1-22.9,6.2c-5.8,4.2-8.8,10-8.8,17.7
      c-0.2,8.4,2.3,16.3,6.4,20.3c4.2,4.5,12.7,6.8,25.4,6.8c5.2,0,9.2,0,12-0.2c2.7-0.2,5.4-1.4,7.8-3.9c1.8-1.7,3.5-4,5-6.8
      c1.4-4,2.2-8.6,2.5-13.3c0.6-6.4,1-12.9,1.1-19.5C2438.8,526.7,2438.9,517,2438.9,503.9z"/>
    <path fill={color} d="M2668.6,452v189c-5.8,0.7-11.5,0.6-17.3-0.2c-4.7-0.8-9.3-2.8-13.7-5.9c-4.1-2.8-7.5-8.3-9.5-15.4
      c-2.2-8.4-3.1-17.6-2.7-26.7V453.5c-2.9-25.2-15.9-35.3-39.2-30.1c-12.1,2.8-19.1,4.8-21,6.2c0.6,6.9,0.9,13.9,0.9,20.8v142.2
      c0.4,9.2-0.6,18.5-2.9,26.7c-2,7-5.4,12.5-9.5,15.4c-4.3,3.2-8.9,5.1-13.5,5.9c-5.8,0.9-11.5,0.9-17.3,0.2V388.2
      c0-22.5,20.1-34.6,60.2-36.4C2639.9,349.1,2668.4,382.4,2668.6,452z"/>
    <path fill={color} d="M2765.7,565.4c5.9,5.4,13.5,8.1,22.6,8.3c9,0.2,17.9-0.5,26.8-2.1c8.7-1.6,17-3.4,24.8-5.4
      c7.8-2.1,12.2-3,13.4-3c0.8,30.1-2.5,51.4-9.9,63.9c-7.4,12.5-22.2,18.7-44.6,18.7c-30.7,0-53.3-11.3-67.7-33.8
      s-21.6-61.5-21.6-116.8c0-27.8,2-51.2,5.9-70.3c3.9-19.2,9.7-33.8,17.3-43.9c7.6-10,16.2-17.3,25.4-21.3c10.7-4.4,21.7-6.5,32.7-6.2
      c23.8,0,41.3,9.1,52.6,27.3c11.2,18.1,16.9,47.2,16.9,86.9c0,15.2-1.7,27.5-5,36.6c-2.9,8.7-7.5,15.2-12.8,18.5
      c-6.2,3.4-12.6,5.7-19,6.8c-7.3,1.3-14.6,1.8-21.9,1.3c-7.8-0.5-15.6,0.2-23.3,1.8c-7.3,1.3-14.5,4.3-21.5,8.9
      C2756.8,552.1,2759.8,560,2765.7,565.4z M2771.3,478.5c7.4-1.4,14.3-2.2,20.8-2.4c6,0,11.8-2.4,17.2-7.3c4.7-3.9,7.6-12.7,7.2-22.1
      c0-9-3.9-16.5-11.8-22.3c-10.1-8.2-21.6-9-32-2.1c-14.4,9.4-20.2,30.8-17.3,64.4C2758.6,482.6,2763.9,479.8,2771.3,478.5
      L2771.3,478.5z"/>
    <path fill={color} d="M2988.5,573.4c2.6,13.5,3,28.2,1.2,42c-1.9,12.8-5.2,21.3-9.8,25.4c-9.4,5.4-19.4,7.1-29.3,5
      c-8.9-1.9-17.5-6.7-25.4-14.3c-7.5-7.4-13.7-18.4-18-31.6c-4.7-14.3-7.1-30.7-6.9-47.3V329.5c-0.4-9.2,0.6-18.5,2.9-26.7
      c2.1-7,5.4-12.4,9.5-15.3c4.3-3.2,8.9-5.1,13.5-5.9c5.8-0.9,11.5-0.9,17.3-0.2v75.3h49.5v3.9c-0.1,3.2-0.3,6.4-0.6,9.6
      c-0.4,4.7-0.9,9.4-1.7,14c-0.9,5.2-2.3,10.3-3.9,14.8c-3.6,11.3-9.5,19.6-16.5,23.3c-4.6,2.7-9.3,4-14.1,3.9
      c-4.6,0-8.8,0.2-12.7,0.6l0.3,119.9c-0.2,9.3,0.9,16.6,3.2,21.5c2.3,5.1,5.7,8.3,9.4,8.9c3.9,0.9,7.9,1,11.8,0.5
      c3.9-0.6,8-1.3,12.1-2.3C2983.1,574.3,2985.8,573.8,2988.5,573.4z"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
