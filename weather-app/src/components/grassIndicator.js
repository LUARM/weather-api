import { motion } from "framer-motion";

const POWER_PATHS = [
  "M172.38 427.007L152.638 318.82",
  "M118.018 436.927L98.2758 328.741",
  "M144.502 432.094L124.76 323.908",
  "M86.4121 429.48L66.6702 321.293",
  "M315.952 400.808L296.21 292.622",
  "M261.59 410.728L241.848 302.542",
  "M288.074 405.895L268.332 297.709",
  "M229.984 403.281L210.242 295.094",
  "M199.318 408.877L179.576 300.69",
  "M457.041 375.062L437.299 266.875",
  "M402.679 384.982L382.937 276.796",
  "M429.163 380.149L409.421 271.963",
  "M371.073 377.535L351.331 269.348",
  "M340.407 383.131L320.666 274.944",
  "M600.613 348.863L580.871 240.676",
  "M546.251 358.783L526.509 250.596",
  "M572.735 353.95L552.993 245.763",
  "M514.645 351.336L494.903 243.149",
  "M483.979 356.932L464.237 248.745",
];

export const GrassIndicator = ({ width, height, colors }) => (
  <svg
    width={width || 1217}
    height={height || 662}
    viewBox="0 0 1217 662"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Weather Icon Block">
      <g id="Grass1">
        {POWER_PATHS.map((path, index) => (
          <motion.path
            key={index}
            animate={{
              x: [17, 0, 15, 0, 15, 14, 0, 14, 17],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              type: "keyframes",
              ease: "easeInOut",
              repeatDelay: 3,
            }}
            d={path}
            stroke={colors.grass1}
            strokeWidth={11}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>
      <g id="Grass2">
        {POWER_PATHS.map((path, index) => (
          <motion.path
            key={index}
            animate={{
              x: [20, 0, 17, 0, 17, 16, 0, 16, 20],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              type: "keyframes",
              ease: "easeInOut",
              repeatDelay: 3,
            }}
            d={path}
            stroke={colors.grass2}
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>
      <g id="Grass3">
        {POWER_PATHS.map((path, index) => (
          <motion.path
            key={index}
            animate={{
              y: [-7, 0, -6, 0, -6, -9, 0, -7, 0, -7],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              type: "keyframes",
              ease: "easeInOut",
              repeatDelay: 3,
            }}
            d={path}
            stroke={colors.grass3}
            strokeWidth={12}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>
      <g id="Shadow">
        <g id="Grass Indicator" filter="url(#filter0_f_25_1012)">
          <path
            d="M446.735 302.549C445.755 297.182 449.312 292.038 454.679 291.058C460.045 290.079 465.19 293.636 466.169 299.002L477.644 361.887C478.14 364.603 480.744 366.404 483.461 365.908C486.177 365.412 487.978 362.808 487.482 360.092L476.134 297.904C475.084 292.153 478.896 286.639 484.648 285.59C490.399 284.54 495.913 288.352 496.962 294.103L508.31 356.291C508.806 359.008 511.41 360.808 514.126 360.312C516.843 359.816 518.643 357.212 518.148 354.496L506.673 291.611C505.693 286.245 509.25 281.1 514.617 280.121C519.983 279.142 525.128 282.698 526.107 288.065L537.582 350.949C538.078 353.666 540.682 355.466 543.398 354.97C546.115 354.475 547.915 351.871 547.42 349.154L535.69 284.876C534.851 280.279 537.898 275.873 542.495 275.034C547.091 274.195 551.498 277.241 552.337 281.838L564.066 346.116C564.562 348.833 567.166 350.633 569.883 350.138C572.599 349.642 574.399 347.038 573.904 344.321L562.301 280.74C561.392 275.758 564.694 270.983 569.676 270.074C574.657 269.165 579.433 272.466 580.342 277.448L591.944 341.029C592.44 343.746 595.044 345.546 597.761 345.05C600.477 344.555 602.277 341.951 601.782 339.234L595.606 305.393C591.7 283.986 605.887 263.466 627.294 259.56L767.429 233.988C786.015 230.596 802.863 245.526 806.255 264.112C822.338 352.248 906.506 410.717 994.25 394.705C1081.99 378.694 1140.09 294.265 1124 206.129C1122.05 195.43 1119.1 185.167 1115.25 175.422C1114.33 173.073 1115.74 170.427 1118.23 169.974L1146.79 164.761C1154.61 163.335 1162.1 168.513 1163.52 176.327C1163.9 178.401 1163.82 180.533 1163.28 182.572L1126.44 322.449C1121.89 339.724 1126.2 358.13 1137.94 371.593C1168.26 406.368 1143.71 460.689 1097.57 460.899L889.554 461.845C882.706 461.877 877.822 455.026 877.786 448.177C877.664 424.728 858.555 405.616 835.105 405.49L422.63 403.28C399.18 403.154 380.269 422.062 380.392 445.512C380.438 454.431 374.388 464.189 365.47 464.229L108.257 465.4C91.1854 465.477 75.6498 457.72 65.4112 445.249C60.1134 438.796 57.8425 430.53 56.3438 422.317L53.6222 407.403C53.3227 405.761 53.2395 404.037 53.4794 402.386C55.5778 387.943 72.2656 391.628 74.8856 405.986L80.077 434.435C80.5727 437.152 83.1768 438.952 85.8933 438.456C88.6099 437.96 90.4103 435.356 89.9145 432.64L78.8898 372.224C78.0288 367.505 79.9013 362.677 84.2289 360.61C90.3728 357.675 97.1224 362.092 98.3447 368.79L109.349 429.094C109.845 431.81 112.449 433.61 115.165 433.115C117.882 432.619 119.682 430.015 119.186 427.298L107.457 363.02C106.618 358.423 109.665 354.017 114.261 353.178C118.858 352.339 123.265 355.385 124.104 359.982L135.833 424.261C136.329 426.977 138.933 428.777 141.649 428.282C144.366 427.786 146.166 425.182 145.671 422.465L134.068 358.884C133.159 353.902 136.461 349.127 141.442 348.218C146.424 347.309 151.2 350.61 152.109 355.592L163.711 419.173C164.207 421.89 166.811 423.69 169.527 423.195C172.244 422.699 174.044 420.095 173.549 417.378L162.073 354.494C161.094 349.127 164.651 343.983 170.017 343.003C175.384 342.024 180.529 345.581 181.508 350.947L192.983 413.832C193.479 416.548 196.083 418.349 198.799 417.853C201.516 417.357 203.316 414.753 202.821 412.037L191.473 349.849C190.423 344.098 194.235 338.584 199.986 337.535C205.738 336.485 211.251 340.297 212.301 346.048L223.649 408.236C224.145 410.953 226.749 412.753 229.465 412.257C232.182 411.761 233.982 409.157 233.486 406.441L222.011 343.556C221.032 338.19 224.589 333.045 229.955 332.066C235.322 331.087 240.466 334.643 241.446 340.01L252.921 402.894C253.417 405.611 256.021 407.411 258.737 406.916C261.454 406.42 263.254 403.816 262.758 401.099L251.029 336.821C250.19 332.224 253.236 327.818 257.833 326.979C262.43 326.14 266.837 329.186 267.675 333.783L279.405 398.062C279.901 400.778 282.505 402.578 285.221 402.083C287.938 401.587 289.738 398.983 289.243 396.266L277.64 332.685C276.731 327.703 280.033 322.928 285.014 322.019C289.996 321.11 294.772 324.411 295.681 329.393L307.283 392.974C307.779 395.691 310.383 397.491 313.099 396.996C315.816 396.5 317.616 393.896 317.121 391.179L305.419 327.053C304.565 322.372 307.667 317.885 312.348 317.031C317.029 316.177 321.516 319.279 322.371 323.96L334.072 388.086C334.568 390.802 337.172 392.603 339.889 392.107C342.605 391.611 344.406 389.007 343.91 386.291L332.562 324.103C331.512 318.352 335.324 312.838 341.076 311.789C346.827 310.739 352.341 314.551 353.39 320.303L364.738 382.49C365.234 385.206 367.838 387.007 370.555 386.511C373.271 386.015 375.071 383.411 374.576 380.695L363.101 317.81C362.121 312.444 365.678 307.299 371.045 306.32C376.411 305.341 381.556 308.897 382.535 314.264L394.01 377.148C394.506 379.865 397.11 381.665 399.827 381.17C402.543 380.674 404.343 378.07 403.848 375.353L392.118 311.075C391.279 306.478 394.326 302.072 398.923 301.233C403.519 300.394 407.926 303.44 408.765 308.037L420.494 372.315C420.99 375.032 423.594 376.832 426.311 376.337C429.027 375.841 430.828 373.237 430.332 370.52L418.729 306.939C417.82 301.957 421.122 297.182 426.104 296.273C431.085 295.364 435.861 298.665 436.77 303.647L448.372 367.228C448.868 369.945 451.472 371.745 454.189 371.25C456.905 370.754 458.706 368.15 458.21 365.433L446.735 302.549Z"
            fill="black"
            fillOpacity={0.29}
          />
        </g>
      </g>
      <g id="Indicator">
        <path
          id="Grass Indicator_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M466.169 288.002C465.189 282.636 460.045 279.079 454.678 280.058V280.058C449.312 281.038 445.755 286.182 446.734 291.549L458.21 354.433C458.705 357.15 456.905 359.754 454.188 360.25V360.25C451.472 360.745 448.868 358.945 448.372 356.228L436.77 292.647C435.861 287.665 431.085 284.364 426.103 285.273V285.273C421.122 286.182 417.82 290.957 418.729 295.939L430.332 359.52C430.827 362.237 429.027 364.841 426.31 365.337V365.337C423.594 365.832 420.99 364.032 420.494 361.316L408.764 297.037C407.926 292.44 403.519 289.394 398.922 290.233V290.233C394.326 291.072 391.279 295.478 392.118 300.075L403.847 364.353C404.343 367.07 402.543 369.674 399.826 370.17V370.17C397.11 370.665 394.506 368.865 394.01 366.149L382.535 303.264C381.555 297.897 376.411 294.341 371.044 295.32V295.32C365.678 296.299 362.121 301.444 363.1 306.81L374.575 369.695C375.071 372.411 373.271 375.015 370.554 375.511V375.511C367.838 376.007 365.234 374.206 364.738 371.49L353.39 309.303C352.34 303.551 346.827 299.739 341.075 300.789V300.789C335.324 301.838 331.512 307.352 332.562 313.103L343.91 375.291C344.405 378.007 342.605 380.611 339.888 381.107V381.107C337.172 381.603 334.568 379.803 334.072 377.086L322.37 312.96C321.516 308.279 317.029 305.177 312.348 306.031V306.031C307.667 306.885 304.564 311.372 305.419 316.054L317.12 380.179C317.616 382.896 315.816 385.5 313.099 385.996V385.996C310.383 386.491 307.778 384.691 307.283 381.974L295.68 318.393C294.771 313.411 289.996 310.11 285.014 311.019V311.019C280.032 311.928 276.731 316.703 277.64 321.685L289.242 385.266C289.738 387.983 287.938 390.587 285.221 391.083V391.083C282.504 391.579 279.9 389.778 279.405 387.062L267.675 322.783C266.836 318.186 262.43 315.14 257.833 315.979V315.979C253.236 316.818 250.19 321.224 251.029 325.821L262.758 390.099C263.254 392.816 261.453 395.42 258.737 395.916V395.916C256.02 396.411 253.416 394.611 252.921 391.894L241.445 329.01C240.466 323.643 235.322 320.087 229.955 321.066V321.066C224.588 322.045 221.032 327.19 222.011 332.556L233.486 395.441C233.982 398.157 232.182 400.761 229.465 401.257V401.257C226.748 401.753 224.144 399.953 223.649 397.236L212.301 335.049C211.251 329.297 205.738 325.485 199.986 326.535V326.535C194.234 327.584 190.423 333.098 191.472 338.849L202.82 401.037C203.316 403.753 201.516 406.357 198.799 406.853V406.853C196.083 407.349 193.478 405.548 192.983 402.832L181.508 339.948C180.528 334.581 175.384 331.024 170.017 332.004V332.004C164.651 332.983 161.094 338.127 162.073 343.494L173.548 406.378C174.044 409.095 172.244 411.699 169.527 412.195V412.195C166.811 412.69 164.206 410.89 163.711 408.173L152.108 344.592C151.199 339.61 146.424 336.309 141.442 337.218V337.218C136.46 338.127 133.159 342.902 134.068 347.884L145.67 411.465C146.166 414.182 144.366 416.786 141.649 417.282V417.282C138.933 417.777 136.328 415.977 135.833 413.261L124.103 348.982C123.264 344.386 118.858 341.339 114.261 342.178V342.178C109.664 343.017 106.618 347.423 107.457 352.02L119.186 416.298C119.682 419.015 117.882 421.619 115.165 422.115V422.115C112.448 422.611 109.844 420.81 109.349 418.094L98.3445 357.79C97.1222 351.092 90.3726 346.675 84.2287 349.61V349.61C79.901 351.677 78.0285 356.506 78.8895 361.224L89.9143 421.64C90.41 424.356 88.6096 426.96 85.8931 427.456V427.456C83.1765 427.952 80.5724 426.152 80.0767 423.435L74.8854 394.986C72.2654 380.628 55.5775 376.943 53.4792 391.386V391.386C53.2393 393.037 53.3224 394.761 53.6219 396.403L56.3435 411.317C57.8423 419.53 60.1131 427.796 65.411 434.249C75.6495 446.72 91.1852 454.477 108.257 454.4L365.47 453.23C374.388 453.189 380.438 443.431 380.391 434.512V434.512C380.269 411.062 399.18 392.154 422.63 392.28L835.105 394.49C858.555 394.616 877.664 413.728 877.786 437.177V437.177C877.821 444.026 882.706 450.877 889.554 450.845L1097.57 449.899C1143.71 449.689 1168.26 395.368 1137.94 360.593C1126.2 347.13 1121.89 328.724 1126.44 311.449L1163.28 171.572C1163.82 169.533 1163.9 167.401 1163.52 165.327C1162.1 157.514 1154.61 152.335 1146.79 153.761L1118.23 158.974V158.974C1115.74 159.427 1114.32 162.073 1115.25 164.422C1119.1 174.167 1122.05 184.43 1124 195.129C1140.09 283.265 1081.99 367.694 994.25 383.705C906.506 399.717 822.337 341.249 806.254 253.113V253.113C802.863 234.526 786.015 219.596 767.429 222.988L627.293 248.56C605.887 252.466 591.7 272.986 595.606 294.393L601.782 328.234C602.277 330.951 600.477 333.555 597.76 334.051V334.051C595.044 334.546 592.44 332.746 591.944 330.029L580.342 266.448C579.433 261.466 574.657 258.165 569.675 259.074V259.074C564.694 259.983 561.392 264.758 562.301 269.74L573.903 333.321C574.399 336.038 572.599 338.642 569.882 339.138V339.138C567.166 339.633 564.562 337.833 564.066 335.116L552.336 270.838C551.498 266.241 547.091 263.195 542.494 264.034V264.034C537.897 264.873 534.851 269.279 535.69 273.876L547.419 338.154C547.915 340.871 546.115 343.475 543.398 343.97V343.97C540.682 344.466 538.077 342.666 537.582 339.949L526.107 277.065C525.127 271.698 519.983 268.142 514.616 269.121V269.121C509.25 270.1 505.693 275.245 506.672 280.611L518.147 343.496C518.643 346.212 516.843 348.816 514.126 349.312V349.312C511.41 349.808 508.806 348.008 508.31 345.291L496.962 283.104C495.912 277.352 490.399 273.54 484.647 274.59V274.59C478.896 275.639 475.084 281.153 476.134 286.904L487.482 349.092C487.977 351.808 486.177 354.412 483.46 354.908V354.908C480.744 355.404 478.14 353.603 477.644 350.887L466.169 288.002Z"
          fill="url(#paint0_linear_25_1012)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_25_1012"
        x={48.3398}
        y={159.525}
        width={1120.42}
        height={310.875}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={2.5}
          result="effect1_foregroundBlur_25_1012"
        />
      </filter>
      <linearGradient
        id="paint0_linear_25_1012"
        x1={603.471}
        y1={252.907}
        x2={654.341}
        y2={531.676}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CBCE74" />
        <stop offset={0.947917} stopColor="#929730" stopOpacity={0.85} />
      </linearGradient>
    </defs>
  </svg>
);
