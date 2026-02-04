# 유니픽셀 홈페이지 작업 로그

## 2026-02-04 작업 내역

### 1. 포트폴리오 섹션 업데이트

#### 메인 페이지 포트폴리오 (App.tsx) - 8개 항목

| 순서 | 영상 ID | 제목 | 카테고리 | 연도 |
|------|---------|------|----------|------|
| 1 | FSowhdPcmxM | 리어카를 탄 과일장수 | Documentary / Storytelling | 2024 |
| 2 | QD-XVgh-CQE | 도봉구 도깨비 축제 | Festival / Event / Promotion | 2024 |
| 3 | Vgr8PayLDR8 | 양주프라임공업사 | Corporate / Industry / Promotion | 2024 |
| 4 | V44wzZiHkgE | 하루예술앱 티처 광고 | App / Commercial / Education | 2023 |
| 5 | wO7VNYrabHU | 전북 대회 아태마스터스 | Sports / Event / 4K Drone | 2023 |
| 6 | j2HpCWtYf58 | 바이켐(주) 기업 홍보 | Corporate / 2D Graphics / Promotion | 2022 |
| 7 | Y2hK-2wX41I | 대전 직업 박람회 | Education / Event / Exhibition | 2023 |
| 8 | SkuGYq8Jjhk | 세계은행 JPO 홍보영상 | Government / Documentary / International | 2023 |

#### 전체 포트폴리오 갤러리 (PortfolioGallery.tsx) - 16개 항목

| 영상 ID | 제목 | 카테고리 | 연도 |
|---------|------|----------|------|
| FSowhdPcmxM | 리어카를 탄 과일장수 | Documentary / Storytelling | 2024 |
| QD-XVgh-CQE | 도봉구 도깨비 축제 | Festival / Event | 2024 |
| Vgr8PayLDR8 | 양주프라임공업사 | Corporate / Industry | 2024 |
| SkuGYq8Jjhk | 세계은행 JPO 홍보영상 | Government / Documentary | 2023 |
| Y2hK-2wX41I | 대전 직업 박람회 | Education / Event | 2023 |
| mplgpzNOWy8 | 새만금 노마드 페스티벌! | Festival / Tourism | 2023 |
| ggEv-t9uSoA | 북촌우리음악 축제 공연 | Performance / Culture | 2023 |
| i5ch5UJ2WIY | Audi 신차 리뷰 | Automotive / Review | 2023 |
| V44wzZiHkgE | 하루예술앱 티처 광고 | App / Commercial | 2023 |
| wO7VNYrabHU | 전북 대회 아태마스터스 | Sports / Event / 4K Drone | 2023 |
| Vy1yrLqdQFI | 안산 사이언스밸리 | City / Motion Graphics | 2023 |
| GC6TdoNmfXk | 주민 협의체행사 | Documentary / Community | 2023 |
| j2HpCWtYf58 | 바이켐(주) 기업 홍보 | Corporate / 2D Graphics | 2022 |
| Gj-0VfaqNcU | 대동몰드 기업소개 영상 | Corporate / Manufacturing | 2022 |
| Q398CeyRuDg | 남북정상회담 5G 서비스 | Government / Technology | 2022 |
| pSAU9EgvRBo | 입주기업사무실 소개영상 | Corporate / Real Estate | 2022 |

---

### 2. 네비게이션 스크롤 연동 (Navbar.tsx)

네비게이션 메뉴 클릭 시 해당 섹션으로 부드럽게 스크롤되도록 구현:

- **회사소개** → `#about` 섹션
- **프로세스** → `#process` 섹션
- **서비스** → `#services` 섹션
- **포트폴리오** → `#portfolio` 섹션
- **문의하기** → `#contact` 섹션

```tsx
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```

---

### 3. 갤러리 UI 개선 (PortfolioGallery.tsx)

- 배경색을 완전 불투명한 `bg-slate-950`으로 변경 (글씨 가독성 개선)
- 갤러리 그리드 영역에 `min-h-screen` 추가
- 썸네일 기본 이미지를 `hqdefault.jpg`로 변경 (로드 안정성 개선)
- Fallback 이미지를 `mqdefault.jpg`로 설정

---

### 4. Git 커밋 히스토리

```
153448d fix: 포트폴리오 제목 수정 및 갤러리 UI 개선
70a4f7c feat: 최신 포트폴리오 추가 및 네비게이션 스크롤 연동
9bf94be feat: YouTube 포트폴리오 갤러리 추가
```

---

### 5. 수정된 파일 목록

- `App.tsx` - 메인 포트폴리오 섹션 제목/카테고리 수정
- `components/PortfolioGallery.tsx` - 전체 갤러리 항목 업데이트, UI 개선
- `components/Navbar.tsx` - 스크롤 네비게이션 기능 추가

---

### 6. 참고 자료

- 포트폴리오 정보 출처: 유니픽셀 회사소개서 PDF
- YouTube 썸네일 URL 형식: `https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg`

---

## 향후 작업 참고사항

- 새 영상 추가 시 `App.tsx`와 `PortfolioGallery.tsx` 두 파일 모두 수정 필요
- 영상 ID는 YouTube URL에서 추출 (예: `https://youtu.be/FSowhdPcmxM` → `FSowhdPcmxM`)
