import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "@langchain/openai";
import { VectorStoreRetriever } from "langchain/vectorstores/base";

export const getLocalRetriever = async (): Promise<VectorStoreRetriever<HNSWLib>> => {

    const VECTOR_STORE_PATH = "store";
    let vectorStore;

    console.log("Loading existing local vector store...");

    vectorStore = await HNSWLib.load(
      VECTOR_STORE_PATH,
      new OpenAIEmbeddings()
    );
    
    console.log("Vector store loaded.");

    return vectorStore.asRetriever()
}


