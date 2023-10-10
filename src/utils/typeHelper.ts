export interface LogbookInterface {
  make: string;
  model: string;
  badge: string;
  fileName: string;
  logContent: string;
}

export interface ModelsInterface {
  [make: string]: {
    [model: string]: string[];
  };
}
