## 一、知识点分区与掌握程度要求
### 🔵 基础概念区 — 要求：熟悉
| 知识点 | 掌握程度 | 核心要义 |
| --- | --- | --- |
| 流程控制 | **熟悉** | 顺序、分支、循环三种结构 |
| 缩进规则 | **精通** | Python用缩进表示代码块，4空格，面试必考 |
| 真值判断 | **熟悉** | 非0和非空为True，0和空为False |


### 🟡 核心机制区 — 要求：理解（面试重点）
| 知识点 | 掌握程度 | 核心机制 |
| --- | --- | --- |
| 分支执行流程 | **理解** | `if-elif-else`自上而下匹配，匹配成功后跳过后续分支 |
| while循环机制 | **理解** | 先判断条件，True执行循环体，直到False |
| for循环机制 | **理解** | 遍历可迭代对象，依次取出元素 |
| range()工作原理 | **理解** | `range(start, stop, step)`左闭右开，不包含stop |
| continue与break | **理解** | continue跳过当前轮，break终止整个循环 |
| while/for else机制 | **理解** | 循环正常结束执行else，break终止则不执行 |


### 🟢 工程实践区 — 要求：精通（AI开发日常必备）
| 知识点 | 掌握程度 | 实践场景 |
| --- | --- | --- |
| if单分支 | **精通** | 数据过滤、条件检查 |
| if-else双分支 | **精通** | 二选一逻辑 |
| if-elif-else多分支 | **精通** | 多条件判断 |
| match-case | **精通** | Python3.10+，多值匹配，替代多个if-elif |
| 三目运算符 | **精通** | 简单条件赋值，写简洁代码 |
| for循环 | **精通** | 遍历数据集、迭代训练轮次 |
| while循环 | **精通** | 不确定次数的循环 |
| range()使用 | **精通** | 生成索引序列 |
| 嵌套循环 | **精通** | 遍历多维数据 |
| pass占位 | **精通** | 占位保持代码结构 |


### 🔴 扩展关联区 — 要求：了解
| 知识点 | 掌握程度 | 面试可能会问 |
| --- | --- | --- |
| 海象运算符`:=` | **了解** | Python3.8+，知道有这东西就行 |
| 循环性能优化 | **了解** | 尽量减少循环内重复计算 |
| 列表推导式 | **了解** | 第3章会细讲，这里知道就行 |


## 二、核心技能点（需精通）
1. **精通**：能正确使用`if-elif-else`多分支判断
2. **精通**：能使用`match-case`进行多值匹配
3. **精通**：能使用三目运算符`值1 if 条件 else 值2`
4. **精通**：能使用`for`遍历列表、字符串、range
5. **精通**：能使用`range()`的三种参数形式
6. **精通**：能使用`while`编写循环
7. **精通**：能正确使用`continue`和`break`
8. **精通**：能使用`pass`占位



## 三、综合练习
### 入门关（15分钟）
**任务**：补全代码，让每个`print`输出正确结果。

```python
# 第一题：单分支
score = 75
if ___:
    print("及格")


# 第二题：双分支
age = 18
if age >= 18:
    print("成年人")
___:
    print("未成年人")


# 第三题：多分支
# 根据分数划分等级
# >=90: A, >=80: B, >=70: C, >=60: D, <60: E
score = 85
if score >= 90:
    grade = "A"
___ score >= 80:
    grade = "B"
___ score >= 70:
    grade = "C"
___ score >= 60:
    grade = "D"
___:
    grade = "E"
print(grade)  # 预期输出: B


# 第四题：三目运算符
num = 10
# 判断num是否为偶数，用三目运算符实现
result = ___ if num % 2 == 0 else ___
print(result)  # 预期输出: 偶数


# 第五题：for循环
# 遍历列表打印每个元素
colors = ["red", "green", "blue"]
for ___:
    print(color)


# 第六题：range()
# 打印0, 2, 4, 6, 8
for i in range(___, ___, ___):
    print(i)


# 第七题：while循环
# 打印1到5
num = 1
while num ___ 5:
    print(num)
    num ___


# 第八题：continue和break
for i in range(10):
    if i == 3:
        ___  # 跳过3
    if i == 7:
        ___  # 遇到7停止
    print(i)  # 预期输出: 0,1,2,4,5,6
```

### 入门关参考答案
```python
# 第一题
if score >= 60:

# 第二题
else:

# 第三题
elif score >= 80:
elif score >= 70:
elif score >= 60:
else:

# 第四题
result = "偶数" if num % 2 == 0 else "奇数"

# 第五题
for color in colors:

# 第六题
for i in range(0, 10, 2):

# 第七题
while num <= 5:
    num += 1

# 第八题
continue
break
```



### 实战关（40分钟）
**任务**：实现一个数据预处理工具，对数值列表进行多种条件筛选和转换。

**背景**：AI项目中经常需要对数据进行清洗和预处理，如过滤异常值、归一化等。

**要求**：

1. 实现`filter_data(data, min_val=None, max_val=None)`函数：
    - 过滤超出`[min_val, max_val]`范围的数据
    - 返回过滤后的列表
2. 实现`transform_data(data, method="normalize")`函数：
    - `"normalize"`：归一化到`[0, 1]`
    - `"standardize"`：标准化（均值0，标准差1）
    - `"clip"`：截断到`[-3, 3]`
3. 实现`process_pipeline(data, steps)`函数：
    - `steps`是一个列表，每个元素为`(func_name, **kwargs)`
    - 按顺序执行数据处理步骤
4. 处理空值（`None`）：跳过不处理

**使用示例**：

```python
data = [1, 2, 3, 4, 5, 100, 200, None, 8, 9, 10]

# 过滤异常值
filtered = filter_data(data, min_val=0, max_val=50)
print(filtered)  # [1, 2, 3, 4, 5, 8, 9, 10]

# 归一化
normalized = transform_data(filtered, "normalize")
print(normalized)  # [0.0, 0.11, 0.22, ..., 1.0]

# 管道处理
result = process_pipeline(data, [
    ("filter_data", {"min_val": 0, "max_val": 50}),
    ("transform_data", {"method": "normalize"})
])
```

### 实战关参考答案
```python
import math

def filter_data(data, min_val=None, max_val=None):
    """过滤超出范围的数据"""
    result = []
    for x in data:
        if x is None:
            continue
        if min_val is not None and x < min_val:
            continue
        if max_val is not None and x > max_val:
            continue
        result.append(x)
    return result


def transform_data(data, method="normalize"):
    """数据变换"""
    # 过滤None
    clean_data = [x for x in data if x is not None]
    if not clean_data:
        return []
    
    if method == "normalize":
        # 归一化到[0, 1]
        min_val = min(clean_data)
        max_val = max(clean_data)
        if max_val == min_val:
            return [0.0] * len(clean_data)
        return [(x - min_val) / (max_val - min_val) for x in clean_data]
    
    elif method == "standardize":
        # 标准化
        mean = sum(clean_data) / len(clean_data)
        var = sum((x - mean) ** 2 for x in clean_data) / len(clean_data)
        if var == 0:
            return [0.0] * len(clean_data)
        std = math.sqrt(var)
        return [(x - mean) / std for x in clean_data]
    
    elif method == "clip":
        # 截断到[-3, 3]
        return [max(-3.0, min(3.0, x)) for x in clean_data]
    
    else:
        return clean_data


def process_pipeline(data, steps):
    """按顺序执行数据处理步骤"""
    result = data
    for step in steps:
        if len(step) == 2:
            func_name, kwargs = step
        else:
            func_name = step
            kwargs = {}
        
        # 根据函数名调用对应函数
        if func_name == "filter_data":
            result = filter_data(result, **kwargs)
        elif func_name == "transform_data":
            result = transform_data(result, **kwargs)
        else:
            print(f"未知函数: {func_name}")
    
    return result


# 测试
if __name__ == "__main__":
    data = [1, 2, 3, 4, 5, 100, 200, None, 8, 9, 10]
    
    filtered = filter_data(data, min_val=0, max_val=50)
    print(f"过滤后: {filtered}")
    
    normalized = transform_data(filtered, "normalize")
    print(f"归一化: {[round(x, 3) for x in normalized]}")
    
    standardized = transform_data(filtered, "standardize")
    print(f"标准化: {[round(x, 3) for x in standardized]}")
```



### 挑战关（60分钟）
**任务**：实现训练循环框架，模拟深度学习训练过程。

**背景**：深度学习训练包含多个epoch，每个epoch内遍历batch数据，需要提前停止、验证、记录日志。

**要求**：

1. 实现`Trainer`类：
    - `__init__(self, max_epochs=10, early_stop=False, patience=3)`
    - `train(self, data_loader, model)`：执行训练循环
2. 每个epoch的训练过程：
    - 遍历batch数据
    - 计算loss（模拟）
    - 每10个batch打印一次loss
    - 每个epoch结束后计算平均loss
    - 如果loss连续`patience`个epoch不下降，提前停止
3. 支持验证：
    - `validate(self, val_loader, model)`：验证集评估
    - 每2个epoch执行一次验证
4. 日志记录：
    - 记录每个epoch的train_loss和val_loss
    - 返回训练历史

**使用示例**：

```python
# 模拟数据：10个epoch，每个epoch 50个batch
data_loader = list(range(50))  # 50个batch
val_loader = list(range(20))

trainer = Trainer(max_epochs=10, early_stop=True, patience=3)
history = trainer.train(data_loader, val_loader)

# 输出训练历史
for record in history:
    print(f"Epoch {record['epoch']}: train_loss={record['train_loss']:.4f}, val_loss={record['val_loss']:.4f}")
```

**思考题**（面试常问）：

```python
for i in range(5):
    if i == 3:
        break
else:
    print("循环正常结束")
# 会打印吗？为什么？

# 答案：不会。break终止循环，else不执行
```

### 挑战关参考答案
```python
import random
import math

class Trainer:
    """训练循环模拟器"""
    
    def __init__(self, max_epochs=10, early_stop=False, patience=3):
        self.max_epochs = max_epochs
        self.early_stop = early_stop
        self.patience = patience
        self.history = []
    
    def _simulate_loss(self, epoch, batch_idx, total_batches):
        """模拟loss：epoch增加loss下降，但会有随机波动"""
        base = 1.0 / (epoch + 1) * 0.8 + 0.2
        noise = random.random() * 0.1
        return base + noise
    
    def _train_one_epoch(self, data_loader, epoch):
        """训练一个epoch"""
        total_loss = 0
        num_batches = len(data_loader)
        
        for batch_idx, batch in enumerate(data_loader):
            # 模拟前向传播和反向传播
            loss = self._simulate_loss(epoch, batch_idx, num_batches)
            total_loss += loss
            
            # 每10个batch打印
            if (batch_idx + 1) % 10 == 0:
                print(f"Epoch {epoch+1}, Batch {batch_idx+1}/{num_batches}, Loss: {loss:.4f}")
        
        return total_loss / num_batches
    
    def _validate(self, val_loader):
        """验证"""
        if not val_loader:
            return None
        
        total_loss = 0
        for batch in val_loader:
            # 模拟验证loss（略高于训练loss）
            loss = random.random() * 0.2 + 0.1
            total_loss += loss
        
        return total_loss / len(val_loader)
    
    def train(self, data_loader, val_loader=None):
        """执行训练"""
        best_loss = float('inf')
        patience_counter = 0
        
        for epoch in range(self.max_epochs):
            print(f"\n=== Epoch {epoch+1}/{self.max_epochs} ===")
            
            # 训练
            train_loss = self._train_one_epoch(data_loader, epoch)
            
            # 验证
            val_loss = self._validate(val_loader) if val_loader else None
            
            # 记录
            record = {
                "epoch": epoch + 1,
                "train_loss": train_loss,
                "val_loss": val_loss
            }
            self.history.append(record)
            
            print(f"Epoch {epoch+1} 完成, Train Loss: {train_loss:.4f}, Val Loss: {val_loss:.4f if val_loss else 'N/A'}")
            
            # Early Stopping
            if self.early_stop and val_loss is not None:
                if val_loss < best_loss:
                    best_loss = val_loss
                    patience_counter = 0
                    print(f"  ✓ 验证Loss下降，保存最佳模型")
                else:
                    patience_counter += 1
                    print(f"  ✗ 验证Loss未下降，patience: {patience_counter}/{self.patience}")
                    
                    if patience_counter >= self.patience:
                        print(f"\n=== Early Stopping at Epoch {epoch+1} ===")
                        break
        
        return self.history


# 测试
if __name__ == "__main__":
    # 模拟数据
    data_loader = list(range(50))
    val_loader = list(range(20))
    
    trainer = Trainer(max_epochs=10, early_stop=True, patience=3)
    history = trainer.train(data_loader, val_loader)
    
    print("\n=== 训练历史 ===")
    for record in history:
        val_str = f"{record['val_loss']:.4f}" if record['val_loss'] is not None else "N/A"
        print(f"Epoch {record['epoch']}: train_loss={record['train_loss']:.4f}, val_loss={val_str}")
```



## 四、面试高频题
| 问题 | 参考答案 |
| --- | --- |
| `for i in range(5)`和`for i in range(0,5)`有区别吗？ | 没有区别，`range(5)`默认从0开始 |
| `range(5, 0, -1)`输出什么？ | `5, 4, 3, 2, 1`，不包含0 |
| `continue`和`break`的区别？ | `continue`跳过本轮，`break`终止整个循环 |
| `for...else`的`else`什么时候执行？ | 循环正常结束（未被`break`打断）时执行 |
| `if-elif-else`和多个`if`的区别？ | `if-elif-else`只匹配第一个，多个`if`会逐一判断 |
| 三目运算符的写法？ | `值1 if 条件 else 值2` |
| Python中`pass`的作用？ | 占位符，保持代码结构完整，什么都不做 |


## 五、学习验证清单
| 问题 | 自评 |
| --- | --- |
| 我能正确使用`if-elif-else`多分支 | ☐ |
| 我知道`elif`匹配成功后后续分支不执行 | ☐ |
| 我能使用`match-case`进行多值匹配 | ☐ |
| 我能使用三目运算符 | ☐ |
| 我能使用`for`遍历列表、字符串、range | ☐ |
| 我能使用`range()`的三种参数形式 | ☐ |
| 我能使用`while`编写循环 | ☐ |
| 我知道`continue`和`break`的区别 | ☐ |
| 我知道循环的`else`在什么情况下执行 | ☐ |
| 我能使用`pass`作为占位符 | ☐ |
| 我知道`if`后的冒号和缩进规则 | ☐ |


