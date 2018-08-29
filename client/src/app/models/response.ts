export interface AssistantResponse {
  intents: Intent[];
  entities: any[];
  input: Input;
  output: Output;
  context: Context;
}

export interface Context {
  conversation_id: string;
  system: System;
}

export interface System {
  dialog_stack: Dialogstack[];
  dialog_turn_counter: number;
  dialog_request_counter: number;
  _node_output_map: Nodeoutputmap;
  branch_exited: boolean;
  branch_exited_reason: string;
}

export interface Nodeoutputmap {
  node_1_1530104184014: number[];
}

export interface Dialogstack {
  dialog_node: string;
}

export interface Output {
  text: string[];
  nodes_visited: string[];
  log_messages: any[];
  attachment?: Attachment;
}

export interface Attachment {
  url: string;
  title: string;
}

export interface Input {
  text: string;
}

export interface Intent {
  intent: string;
  confidence: number;
}
