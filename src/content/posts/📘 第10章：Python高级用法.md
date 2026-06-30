---
title: 📘 第10章：Python高级用法
published: 2026-06-30
description: 📘 第10章：Python高级用法
---

## 一、知识点分区与掌握程度要求
### 🔵 基础概念区 — 要求：熟悉
| 知识点 | 掌握程度 | 核心要义 |
| --- | --- | --- |
| 装饰器 | **熟悉** | 在不修改原函数的情况下增强功能，PyTorch中常见 |
| 生成器 | **熟悉** | 使用`yield`的函数，惰性求值节省内存 |
| 迭代器 | **熟悉** | 实现`__iter__`和`__next__`的对象 |
| 上下文管理器 | **熟悉** | `with`语句的底层支持 |
| 闭包 | **熟悉** | 函数嵌套，内部函数捕获外部变量 |


### 🟡 核心机制区 — 要求：理解（面试重点）
| 知识点 | 掌握程度 | 核心机制 |
| --- | --- | --- |
| 装饰器原理 | **理解** | 接收函数返回函数，本质是`func = decorator(func)` |
| 生成器与迭代器区别 | **理解** | 生成器是迭代器的简化实现，`yield`产生值 |
| 闭包三要素 | **理解** | 函数嵌套、内部函数引用外部变量、外部函数返回内部函数 |
| 上下文管理器协议 | **理解** | `__enter__`和`__exit__` |
| `functools.wraps` | **理解** | 保留被装饰函数的元信息 |


### 🟢 工程实践区 — 要求：精通（能看懂框架代码、能写基础用法）
| 知识点 | 掌握程度 | 实践场景 |
| --- | --- | --- |
| 基础装饰器 | **精通** | 写日志、计时装饰器 |
| 带参数装饰器 | **精通** | 自定义装饰器参数 |
| 生成器基本用法 | **精通** | 数据流处理，大数据集遍历 |
| 上下文管理器 | **精通** | `with`语句使用，自定义上下文 |
| `functools.lru_cache` | **精通** | 函数结果缓存 |


### 🔴 扩展关联区 — 要求：了解
| 知识点 | 掌握程度 | 面试可能会问 |
| --- | --- | --- |
| 元类 | **了解** | 类的类，PyTorch中常见 |
| 描述符 | **了解** | `@property`的底层 |
| 协程 | **了解** | `async/await`基础 |
| 类型注解 | **了解** | 函数签名注解 |


## 二、核心技能点（需精通）
1. **精通**：能写基础装饰器
2. **精通**：能看懂带参数装饰器（如PyTorch中的`@torch.no_grad()`）
3. **精通**：能使用生成器处理大数据
4. **精通**：能使用`with`语句管理资源
5. **精通**：能使用`functools.lru_cache`缓存结果



## 三、综合练习
### 入门关（15分钟）
**任务**：补全代码，让每个`print`输出正确结果。

```python
# 第一题：基础装饰器
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"耗时: {time.time() - start:.2f}秒")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(0.5)
    return "完成"

result = slow_function()  # 预期输出: 耗时: 0.50秒


# 第二题：生成器
def count_up_to(n):
    for i in range(n):
        yield i

gen = count_up_to(3)
print(next(gen))  # 预期输出: ___
print(next(gen))  # 预期输出: ___
print(next(gen))  # 预期输出: ___

# 用for遍历
for num in count_up_to(3):
    print(num)  # 预期输出: 0 1 2


# 第三题：上下文管理器
class FileContext:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()
        print("文件已关闭")

with FileContext("test.txt", "w") as f:
    f.write("hello")
# 预期输出: 文件已关闭


# 第四题：lru_cache
from functools import lru_cache

@lru_cache(maxsize=3)
def expensive_function(n):
    print(f"计算 {n}")
    return n * n

print(expensive_function(2))  # 输出: 计算 2 \n 4
print(expensive_function(2))  # 预期输出: ___
print(expensive_function(3))  # 输出: 计算 3 \n 9
```

### 入门关参考答案
```python
# 第二题
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2

# 第四题
print(expensive_function(2))  # 4（直接返回缓存，不打印"计算 2"）
```



### 实战关（40分钟）
**任务**：为之前的AI项目添加高级功能，使用装饰器、生成器和上下文管理器优化代码。

**背景**：AI训练中需要日志、计时、缓存、数据流处理等高级功能。

**要求**：

1. 实现日志装饰器`@log`：记录函数调用参数和返回值
2. 实现重试装饰器`@retry`：失败自动重试
3. 实现数据生成器`data_generator`：分批yield数据，节省内存
4. 实现训练上下文管理器`TrainingContext`：自动记录训练开始/结束时间
5. 使用`lru_cache`缓存预处理结果

**使用示例**：

```python
@log
@retry(max_attempts=3)
def call_api(prompt):
    return f"响应: {prompt}"

# 生成器处理大数据
def data_generator(data, batch_size):
    for i in range(0, len(data), batch_size):
        yield data[i:i+batch_size]

for batch in data_generator(large_data, 32):
    process(batch)

# 训练上下文
with TrainingContext("实验1"):
    train_model()
```

### 实战关参考答案
```python
import time
import functools
from datetime import datetime

# ===== 装饰器 =====
def log(level="INFO"):
    """日志装饰器"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            print(f"[{timestamp}] {level}: 调用 {func.__name__}")
            print(f"  args: {args}, kwargs: {kwargs}")
            result = func(*args, **kwargs)
            print(f"  返回: {result}")
            return result
        return wrapper
    return decorator


def retry(max_attempts=3, delay=1):
    """重试装饰器"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts:
                        raise
                    print(f"尝试 {attempt} 失败: {e}，{delay}秒后重试")
                    time.sleep(delay)
            return None
        return wrapper
    return decorator


def timer(func):
    """计时装饰器"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} 耗时: {elapsed:.4f}秒")
        return result
    return wrapper


# ===== 数据生成器 =====
def data_generator(data, labels, batch_size, shuffle=True):
    """数据生成器，分批yield数据"""
    import random
    indices = list(range(len(data)))
    if shuffle:
        random.shuffle(indices)
    
    for i in range(0, len(indices), batch_size):
        batch_indices = indices[i:i+batch_size]
        batch_x = [data[idx] for idx in batch_indices]
        batch_y = [labels[idx] for idx in batch_indices]
        yield batch_x, batch_y


# ===== 训练上下文管理器 =====
class TrainingContext:
    """训练上下文，自动记录训练信息"""
    def __init__(self, experiment_name, log_file="training.log"):
        self.experiment_name = experiment_name
        self.log_file = log_file
        self.start_time = None
    
    def __enter__(self):
        self.start_time = time.time()
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"=== 实验: {self.experiment_name} 开始于 {timestamp} ===")
        with open(self.log_file, "a") as f:
            f.write(f"\n=== {self.experiment_name} 开始于 {timestamp} ===\n")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        elapsed = time.time() - self.start_time
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        status = "失败" if exc_type else "成功"
        print(f"=== 实验: {self.experiment_name} {status}，耗时: {elapsed:.2f}秒 ===")
        with open(self.log_file, "a") as f:
            f.write(f"{status}，耗时: {elapsed:.2f}秒\n")
        return False  # 不抑制异常


# ===== 缓存 =====
from functools import lru_cache

@lru_cache(maxsize=128)
def preprocess_text(text):
    """预处理文本（缓存结果）"""
    print(f"预处理: {text[:30]}...")
    return text.lower().strip()


# ===== 测试 =====
if __name__ == "__main__":
    # 装饰器测试
    print("=== 装饰器测试 ===")
    @log("DEBUG")
    @retry(max_attempts=2, delay=0.5)
    @timer
    def test_func(x, y=10):
        return x + y
    
    result = test_func(5, y=3)
    print(f"结果: {result}")
    
    # 生成器测试
    print("\n=== 生成器测试 ===")
    data = list(range(10))
    labels = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    for batch_x, batch_y in data_generator(data, labels, batch_size=3):
        print(f"Batch: x={batch_x}, y={batch_y}")
    
    # 上下文管理器测试
    print("\n=== 上下文管理器测试 ===")
    with TrainingContext("测试实验"):
        print("训练中...")
        time.sleep(0.1)
    
    # lru_cache测试
    print("\n=== 缓存测试 ===")
    print(preprocess_text("Hello World!"))
    print(preprocess_text("Hello World!"))  # 直接从缓存返回
```

### 挑战关（60分钟）
**任务**：实现一个带缓存和重试的模型推理服务。

**背景**：AI模型推理可能涉及高并发、临时故障、重复请求，需要高级功能优化。

**要求**：

1. 实现`InferenceService`类：
    - 使用`lru_cache`缓存推理结果
    - 使用装饰器添加日志和计时
    - 使用生成器处理批量请求
    - 使用上下文管理器管理模型生命周期
2. 模拟模型加载和推理
3. 实现缓存过期机制（TTL）
4. 实现批量推理生成器

**使用示例**：

```python
service = InferenceService(model_name="bert-base", cache_ttl=60)

# 单次推理
result = service.predict("Hello world")
print(result)

# 批量推理（使用生成器）
requests = ["text1", "text2", "text3", "text4", "text5"]
for batch_results in service.batch_predict(requests, batch_size=2):
    print(batch_results)
```

### 挑战关参考答案
```python
import time
import functools
from datetime import datetime, timedelta
from collections import OrderedDict

# ===== TTL缓存 =====
class TTLCache:
    """带TTL的缓存"""
    def __init__(self, maxsize=128, ttl=60):
        self.cache = OrderedDict()
        self.maxsize = maxsize
        self.ttl = ttl
    
    def get(self, key):
        if key not in self.cache:
            return None
        value, timestamp = self.cache[key]
        if datetime.now() - timestamp > timedelta(seconds=self.ttl):
            del self.cache[key]
            return None
        # 移动到末尾（LRU）
        self.cache.move_to_end(key)
        return value
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = (value, datetime.now())
        if len(self.cache) > self.maxsize:
            self.cache.popitem(last=False)
    
    def clear(self):
        self.cache.clear()
    
    def stats(self):
        return {"size": len(self.cache), "maxsize": self.maxsize, "ttl": self.ttl}


# ===== 日志装饰器 =====
def log_call(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        timestamp = datetime.now().strftime("%H:%M:%S")
        print(f"[{timestamp}] 调用 {func.__name__}")
        result = func(*args, **kwargs)
        print(f"[{timestamp}] 完成 {func.__name__}")
        return result
    return wrapper


# ===== 重试装饰器 =====
def retry(max_attempts=3, delay=0.5):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts:
                        raise
                    print(f"  重试 {attempt}/{max_attempts}: {e}")
                    time.sleep(delay * attempt)
            return None
        return wrapper
    return decorator


# ===== 推理服务 =====
class InferenceService:
    """模型推理服务"""
    
    def __init__(self, model_name="bert-base", cache_ttl=60, max_cache_size=128):
        self.model_name = model_name
        self._model = None  # 延迟加载
        self.cache = TTLCache(maxsize=max_cache_size, ttl=cache_ttl)
        self._call_count = 0
        self._cache_hits = 0
    
    def _load_model(self):
        """模拟加载模型"""
        if self._model is None:
            print(f"加载模型 {self.model_name}...")
            time.sleep(0.2)  # 模拟加载时间
            self._model = {"name": self.model_name, "loaded": True}
        return self._model
    
    @retry(max_attempts=2, delay=0.5)
    @log_call
    def predict(self, text):
        """单次推理"""
        # 检查缓存
        cache_key = f"{self.model_name}:{text}"
        cached = self.cache.get(cache_key)
        if cached is not None:
            self._cache_hits += 1
            print(f"  命中缓存: {cached[:50]}...")
            return cached
        
        # 加载模型
        self._load_model()
        
        # 模拟推理（1%随机失败）
        import random
        if random.random() < 0.02:
            raise RuntimeError("推理临时失败")
        
        # 模拟计算
        time.sleep(0.05)
        result = f"处理结果: {text[::-1]}"  # 反转文本作为模拟
        
        # 存入缓存
        self.cache.put(cache_key, result)
        self._call_count += 1
        
        return result
    
    def batch_predict(self, texts, batch_size=2):
        """批量推理（生成器）"""
        for i in range(0, len(texts), batch_size):
            batch = texts[i:i+batch_size]
            results = []
            for text in batch:
                results.append(self.predict(text))
            yield results
    
    def get_stats(self):
        """获取统计信息"""
        return {
            "model": self.model_name,
            "call_count": self._call_count,
            "cache_hits": self._cache_hits,
            "cache_stats": self.cache.stats()
        }

# ===== 上下文管理器 =====
class ModelContext:
    """模型上下文管理器"""
    def __init__(self, service, operation="inference"):
        self.service = service
        self.operation = operation
        self.start_time = None
    
    def __enter__(self):
        self.start_time = time.time()
        print(f"开始 {self.operation}...")
        return self.service
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        elapsed = time.time() - self.start_time
        status = "失败" if exc_type else "成功"
        print(f"{self.operation} {status}，耗时: {elapsed:.2f}秒")
        return False


# ===== 测试 =====
if __name__ == "__main__":
    service = InferenceService("bert-base", cache_ttl=10, max_cache_size=5)
    
    print("=== 单次推理 ===")
    with ModelContext(service, "推理"):
        result = service.predict("Hello world")
        print(f"结果: {result}")
    
    print("\n=== 缓存测试 ===")
    print("第一次调用:")
    service.predict("AI is great")
    print("第二次调用（应命中缓存）:")
    service.predict("AI is great")
    
    print("\n=== 批量推理 ===")
    texts = ["文本1", "文本2", "文本3", "文本4", "文本5"]
    for idx, batch in enumerate(service.batch_predict(texts, batch_size=2)):
        print(f"Batch {idx+1}: {batch}")
    
    print("\n=== 统计信息 ===")
    print(service.get_stats())
    
    print("\n=== 缓存过期测试 ===")
    print("等待缓存过期...")
    time.sleep(11)
    service.predict("AI is great")  # 缓存已过期，重新计算
    print(service.get_stats())
```

## 四、面试高频题
| 问题 | 参考答案 |
| --- | --- |
| 装饰器的原理？ | 装饰器接收函数作为参数，返回增强后的函数。`@deco`等价于`func = deco(func)` |
| 装饰器如何保留原函数信息？ | 使用`functools.wraps`，拷贝`__name__`、`__doc__`等属性 |
| 生成器和迭代器的区别？ | 生成器是使用`yield`的函数，自动实现迭代器协议；迭代器需手动实现`__iter__`和`__next__` |
| 上下文管理器的作用？ | 资源管理，自动执行进入和退出操作，如文件关闭、锁释放 |
| `with`语句的原理？ | 调用`__enter__`获取资源，执行代码块，最后调用`__exit__`清理 |
| `yield`和`return`的区别？ | `yield`挂起函数并返回值，可多次；`return`结束函数返回一次 |
| `lru_cache`的作用？ | 缓存函数结果，缓存大小有限，LRU淘汰策略 |


## 五、学习验证清单
| 问题 | 自评 |
| --- | --- |
| 我能写一个简单的计时装饰器 | ☐ |
| 我能看懂带参数的装饰器 | ☐ |
| 我知道`functools.wraps`的作用 | ☐ |
| 我能写一个生成器函数 | ☐ |
| 我知道生成器和列表推导式的区别 | ☐ |
| 我能使用`with`语句管理资源 | ☐ |
| 我知道`__enter__`和`__exit__`的作用 | ☐ |
| 我能使用`lru_cache`缓存函数结果 | ☐ |
| 我知道闭包的三要素 | ☐ |
| 我能理解PyTorch中的装饰器（如`@staticmethod`） | ☐ |


