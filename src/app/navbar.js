import styles from "./page.module.css";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="108"
        height="50"
        viewBox="0 0 108 50"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.8202 8.4747C23.7891 7.53027 23.2735 6.35406 23.2735 4.94608C23.2735 3.53809 23.7875 2.36346 24.8202 1.41745C25.8514 0.473007 27.1443 0 28.702 0C30.2598 0 31.5511 0.473007 32.5839 1.41745C33.6134 2.36188 34.1306 3.53809 34.1306 4.94608C34.1306 6.35406 33.615 7.53027 32.5839 8.4747C31.5527 9.41914 30.2582 9.89215 28.702 9.89215C27.1458 9.89215 25.8514 9.42072 24.8202 8.4747ZM20.8155 18.4409C18.4142 18.8319 16.3455 19.6944 14.6033 21.0361C12.7712 22.4441 11.3774 24.2289 10.4203 26.3922L9.60519 20.5584L0 21.9049L3.07928 43.9013L12.8658 43.8445L12.2477 39.4172C11.759 35.9327 12.1847 33.3864 13.5185 31.7671C14.8556 30.1526 17.033 29.1324 20.0508 28.7083L22.4852 28.3678L20.817 18.4409H20.8155ZM40.7195 50L35.2705 17.856L25.9081 18.4173L31.2814 50H40.7195ZM45.1595 24.5428L41.6688 24.9149L40.4153 17.8482L44.5178 17.4761L43.7531 9.05655L52.518 8.26031L53.2826 16.6798L60.9895 15.9798L62.243 23.0465L53.9244 23.7466L45.1595 24.5428ZM92.979 20.2147L93.1902 15.7148V15.7117L101.162 16.0869L99.6767 47.6396L91.705 47.2644L92.4476 31.488L92.448 31.4793C92.451 31.4052 92.4539 31.3337 92.4539 31.2594C92.5138 29.4147 92.2111 27.8159 91.552 26.4505C90.8646 25.0299 89.9013 23.9168 88.6525 23.1158C87.4053 22.3196 86.0494 21.8844 84.5783 21.815C83.1104 21.7457 81.7387 22.0437 80.4632 22.7027C79.1813 23.3665 78.1281 24.3708 77.2909 25.7205C76.4489 27.0749 75.987 28.6973 75.8971 30.5956C75.8072 32.494 76.1147 34.1716 76.8242 35.6347C77.529 37.0932 78.4907 38.2347 79.7206 39.053C80.9456 39.8713 82.2732 40.3143 83.7049 40.3837H83.7364L83.4132 47.247C82.7273 47.307 82.021 47.3243 81.2846 47.2896C78.6468 47.1666 76.2786 46.3672 74.1769 44.8978C72.0736 43.4299 70.4512 41.4227 69.3081 38.8764C68.1603 36.3285 67.6668 33.4463 67.8181 30.2172C67.9679 27.026 68.7295 24.2289 70.1106 21.8198C71.4871 19.4106 73.2892 17.5927 75.5187 16.3691C77.7481 15.1393 80.2015 14.5906 82.8755 14.7168C85.2138 14.8271 87.2319 15.3979 88.941 16.4275C90.6454 17.4602 91.9935 18.72 92.979 20.2147ZM57.1188 35.3415C57.2213 36.4736 57.6691 39.4503 58.0948 40.07C58.7239 40.986 59.9852 41.2683 61.2955 41.15L65.2829 40.7874L65.9325 47.944L60.5339 48.4343C53.2953 49.0918 49.0934 43.0215 48.4628 36.0652L57.1188 35.3415ZM107.406 44.6613C107.201 44.2923 106.92 44.0038 106.562 43.7941C106.206 43.5844 105.797 43.4803 105.34 43.4803C104.883 43.4803 104.473 43.586 104.112 43.7941C103.749 44.0022 103.467 44.2923 103.262 44.6613C103.057 45.0302 102.955 45.4449 102.955 45.9021C102.955 46.3594 103.057 46.7709 103.262 47.1367C103.467 47.5025 103.751 47.7894 104.112 47.9976C104.473 48.2073 104.883 48.3113 105.34 48.3113C105.797 48.3113 106.204 48.2073 106.562 47.9976C106.92 47.7894 107.201 47.5025 107.406 47.1367C107.611 46.7709 107.713 46.3594 107.713 45.9021C107.713 45.4449 107.611 45.0302 107.406 44.6613ZM107.279 45.9021C107.279 46.4887 107.101 46.9711 106.743 47.348C106.386 47.7248 105.927 47.914 105.34 47.914C104.754 47.914 104.282 47.7248 103.924 47.348C103.566 46.9711 103.388 46.4887 103.388 45.9021C103.388 45.3156 103.566 44.8331 103.924 44.4563C104.282 44.0795 104.762 43.8903 105.34 43.8903C105.919 43.8903 106.386 44.0795 106.743 44.4563C107.101 44.8347 107.279 45.3156 107.279 45.9021ZM105.75 46.1308C105.95 46.0913 106.108 46.0046 106.22 45.8722H106.218C106.33 45.7397 106.387 45.5726 106.387 45.3724C106.387 45.1311 106.308 44.9404 106.152 44.8C105.996 44.6597 105.785 44.5888 105.52 44.5888H104.399V47.1793H104.918V46.156H105.195L105.857 47.1793L106.472 47.1666L105.75 46.1308ZM105.485 45.7208H104.919V45.0586H105.485C105.599 45.0586 105.69 45.0854 105.763 45.1375C105.835 45.1911 105.872 45.273 105.872 45.385C105.872 45.4969 105.835 45.5805 105.763 45.6373C105.69 45.6924 105.597 45.7208 105.485 45.7208Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.8202 8.4747C23.7891 7.53027 23.2735 6.35406 23.2735 4.94608C23.2735 3.53809 23.7875 2.36346 24.8202 1.41745C25.8514 0.473007 27.1443 0 28.702 0C30.2598 0 31.5511 0.473007 32.5839 1.41745C33.6134 2.36188 34.1306 3.53809 34.1306 4.94608C34.1306 6.35406 33.615 7.53027 32.5839 8.4747C31.5527 9.41914 30.2582 9.89215 28.702 9.89215C27.1458 9.89215 25.8514 9.42072 24.8202 8.4747ZM20.8155 18.4409C18.4142 18.8319 16.3455 19.6944 14.6033 21.0361C12.7712 22.4441 11.3774 24.2289 10.4203 26.3922L9.60519 20.5584L0 21.9049L3.07928 43.9013L12.8658 43.8445L12.2477 39.4172C11.759 35.9327 12.1847 33.3864 13.5185 31.7671C14.8556 30.1526 17.033 29.1324 20.0508 28.7083L22.4852 28.3678L20.817 18.4409H20.8155ZM40.7195 50L35.2705 17.856L25.9081 18.4173L31.2814 50H40.7195ZM45.1595 24.5428L41.6688 24.9149L40.4153 17.8482L44.5178 17.4761L43.7531 9.05655L52.518 8.26031L53.2826 16.6798L60.9895 15.9798L62.243 23.0465L53.9244 23.7466L45.1595 24.5428ZM92.979 20.2147L93.1902 15.7148V15.7117L101.162 16.0869L99.6767 47.6396L91.705 47.2644L92.4476 31.488L92.448 31.4793C92.451 31.4052 92.4539 31.3337 92.4539 31.2594C92.5138 29.4147 92.2111 27.8159 91.552 26.4505C90.8646 25.0299 89.9013 23.9168 88.6525 23.1158C87.4053 22.3196 86.0494 21.8844 84.5783 21.815C83.1104 21.7457 81.7387 22.0437 80.4632 22.7027C79.1813 23.3665 78.1281 24.3708 77.2909 25.7205C76.4489 27.0749 75.987 28.6973 75.8971 30.5956C75.8072 32.494 76.1147 34.1716 76.8242 35.6347C77.529 37.0932 78.4907 38.2347 79.7206 39.053C80.9456 39.8713 82.2732 40.3143 83.7049 40.3837H83.7364L83.4132 47.247C82.7273 47.307 82.021 47.3243 81.2846 47.2896C78.6468 47.1666 76.2786 46.3672 74.1769 44.8978C72.0736 43.4299 70.4512 41.4227 69.3081 38.8764C68.1603 36.3285 67.6668 33.4463 67.8181 30.2172C67.9679 27.026 68.7295 24.2289 70.1106 21.8198C71.4871 19.4106 73.2892 17.5927 75.5187 16.3691C77.7481 15.1393 80.2015 14.5906 82.8755 14.7168C85.2138 14.8271 87.2319 15.3979 88.941 16.4275C90.6454 17.4602 91.9935 18.72 92.979 20.2147ZM57.1188 35.3415C57.2213 36.4736 57.6691 39.4503 58.0948 40.07C58.7239 40.986 59.9852 41.2683 61.2955 41.15L65.2829 40.7874L65.9325 47.944L60.5339 48.4343C53.2953 49.0918 49.0934 43.0215 48.4628 36.0652L57.1188 35.3415ZM107.406 44.6613C107.201 44.2923 106.92 44.0038 106.562 43.7941C106.206 43.5844 105.797 43.4803 105.34 43.4803C104.883 43.4803 104.473 43.586 104.112 43.7941C103.749 44.0022 103.467 44.2923 103.262 44.6613C103.057 45.0302 102.955 45.4449 102.955 45.9021C102.955 46.3594 103.057 46.7709 103.262 47.1367C103.467 47.5025 103.751 47.7894 104.112 47.9976C104.473 48.2073 104.883 48.3113 105.34 48.3113C105.797 48.3113 106.204 48.2073 106.562 47.9976C106.92 47.7894 107.201 47.5025 107.406 47.1367C107.611 46.7709 107.713 46.3594 107.713 45.9021C107.713 45.4449 107.611 45.0302 107.406 44.6613ZM107.279 45.9021C107.279 46.4887 107.101 46.9711 106.743 47.348C106.386 47.7248 105.927 47.914 105.34 47.914C104.754 47.914 104.282 47.7248 103.924 47.348C103.566 46.9711 103.388 46.4887 103.388 45.9021C103.388 45.3156 103.566 44.8331 103.924 44.4563C104.282 44.0795 104.762 43.8903 105.34 43.8903C105.919 43.8903 106.386 44.0795 106.743 44.4563C107.101 44.8347 107.279 45.3156 107.279 45.9021ZM105.75 46.1308C105.95 46.0913 106.108 46.0046 106.22 45.8722H106.218C106.33 45.7397 106.387 45.5726 106.387 45.3724C106.387 45.1311 106.308 44.9404 106.152 44.8C105.996 44.6597 105.785 44.5888 105.52 44.5888H104.399V47.1793H104.918V46.156H105.195L105.857 47.1793L106.472 47.1666L105.75 46.1308ZM105.485 45.7208H104.919V45.0586H105.485C105.599 45.0586 105.69 45.0854 105.763 45.1375C105.835 45.1911 105.872 45.273 105.872 45.385C105.872 45.4969 105.835 45.5805 105.763 45.6373C105.69 45.6924 105.597 45.7208 105.485 45.7208Z"
          fill="url(#paint0_linear_205_2505)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_205_2505"
            x1="107.713"
            y1="50"
            x2="43.9371"
            y2="-33.5417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A332FE" />
            <stop offset="1" stop-color="#20D2FE" />
          </linearGradient>
        </defs>
      </svg>{" "}
      <button className={styles.notify}>Download investor pack</button>
    </div>
  );
}