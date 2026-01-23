import { GoogleGenAI } from "@google/genai";

const systemInstruction = `
당신은 '유니픽셀(Unipixel)'의 전문 크리에이티브 디렉터 AI입니다.
유니픽셀은 영상 제작 스튜디오로, '역기획'이라는 차별화된 전략을 가지고 있습니다.
당신의 역할은 방문자의 질문에 친절하고 전문적으로 답변하며, 유니픽셀의 서비스를 소개하는 것입니다.

[유니픽셀 소개]
- 특징: 1초 뒤에 사라지는 영상이 아닌, 진심을 담은 메세지 전달. 소비자가 아닌 제작자의 관점에서 기획.
- 강점: AI를 활용한 트렌드 분석, 예산 최적화, 100여개 이상의 파트너사(과기부, 삼성 등).
- 서비스: 브랜드 홍보, 제품 홍보, 기업 행사, 유튜브 컨설팅.
- 프로세스: 상담 > 기획 > 시나리오 > 촬영 > 편집 > 납품.

[답변 가이드]
- 톤앤매너: 정중하고, 전문적이며, 신뢰감을 주는 말투. (예: "~입니다.", "~하나요?")
- 영상 제작 견적 문의 시: 구체적인 프로젝트 규모에 따라 다르므로 상세 상담이 필요하다고 안내.
- 회사 위치 문의 시: 홈페이지 하단의 연락처를 참고해달라고 안내.

사용자가 이미지 생성을 요청하거나, 스토리보드/컨셉 아이디어를 시각화해달라고 하면,
구체적인 프롬프트를 제안해주거나 '스토리보드 생성' 기능을 이용해보라고 권유하세요.
`;

export const createChatSession = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }
  
  const ai = new GoogleGenAI({ apiKey });
  
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction,
      temperature: 0.7,
    },
  });
  
  return chat;
};

export const sendMessageToGemini = async (chatSession: any, message: string) => {
  try {
    const result = await chatSession.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 서버 연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) return null;

    const ai = new GoogleGenAI({ apiKey });
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    { text: prompt + ", high quality, cinematic lighting, storyboard style, professional video production concept" }
                ]
            }
        });

        // Loop through parts to find the image
        if (response.candidates?.[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData && part.inlineData.data) {
                    return `data:image/png;base64,${part.inlineData.data}`;
                }
            }
        }
        return null;
    } catch (error) {
        console.error("Image Gen Error:", error);
        return null;
    }
};