declare module '@global_types' {
    export namespace item_tyeps {
        type survey_item = {code: string; name: string};
    }
    export namespace api_item_types {
        type lifeArrayItem =
            // 생애 주기
            | {code: '001'; name: '영유아'}
            | {code: '002'; name: '아동'}
            | {code: '003'; name: '청소년'}
            | {code: '004'; name: '청년'}
            | {code: '005'; name: '중장년'}
            | {code: '006'; name: '노년'};

        type charTrgterArrayItem =
            // 대상 특성
            | {code: '001'; name: '해당없음'}
            | {code: '002'; name: '여성'}
            | {code: '003'; name: '임산부'}
            | {code: '004'; name: '장애'}
            | {code: '005'; name: '국가유공자등 보훈대상자'}
            | {code: '006'; name: '실업자'};

        type obstKiArrayItem =
            // 장애 유형
            | {code: '10'; name: '지체'}
            | {code: '20'; name: '시각'}
            | {code: '30'; name: '청각'}
            | {code: '40'; name: '언어'}
            | {code: '50'; name: '지적'}
            | {code: '60'; name: '뇌병변'}
            | {code: '70'; name: '자폐성'}
            | {code: '80'; name: '정신'}
            | {code: '90'; name: '신장'}
            | {code: 'A0'; name: '심장'}
            | {code: 'B0'; name: '호흡기'}
            | {code: 'C0'; name: '간'}
            | {code: 'D0'; name: '안면'}
            | {code: 'E0'; name: '장루'}
            | {code: 'F0'; name: '간질'};

        type obstAbtArrayItem =
            // 장애 유형
            | {code: '10'; name: '심한 장애'}
            | {code: '20'; name: '심하지 않은 장애'};

        type trgterIndvdlArrayItem =
            // 가구 유형
            | {code: '001'; name: '해당없음'}
            | {code: '002'; name: '한부모'}
            | {code: '003'; name: '다문화'}
            | {code: '004'; name: '조손'}
            | {code: '005'; name: '새터민'}
            | {code: '006'; name: '소년소녀가장'}
            | {code: '007'; name: '독거노인'};

        type desireArrayItem =
            // 욕구
            | {code: '0000000'; name: '안전'}
            | {code: '1000000'; name: '건강'}
            | {code: '2000000'; name: '일상생활유지'}
            | {code: '3000000'; name: '가족관계'}
            | {code: '4000000'; name: '사회적 관계'}
            | {code: '5000000'; name: '경제'}
            | {code: '6000000'; name: '교육'}
            | {code: '7000000'; name: '고용'}
            | {code: '8000000'; name: '생활환경'}
            | {code: '9000000'; name: '법률 및 권익보장'}
            | {code: 'A000000'; name: '기타'};
    }
}
