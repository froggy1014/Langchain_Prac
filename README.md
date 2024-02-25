# 랭체인 실습 레포지토리

- [블로그 포스팅](https://froggy1014.github.io/posts/llm/)

1. data라는 폴더안에 정보가 기입된 .txt파일을 넣어주세요.

2. 환경변수를 넣어주세요. 

  ```
  OPENAI_API_KEY=your_openai_api_key
  SUPABASE_URL=your_supabase_url
  SUPABASE_API_KEY=your_supabase_api_key
  ```

3. templates안에 있는 프롬프트를 수정해주셔야 합니다.

4. 현재 두가지 옵션이 있습니다. 

! package.json에서 build script를 아래와 같이 바꿔주세요. 

- 로컬에 벡터데이터를 저장하기 

  ```"build": "npm run ingest-local && next build```

- SupaBase에 벡터데이터 저장하기
  
  ```"build": "npm run ingest-remote && next build```
  



