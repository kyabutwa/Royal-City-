# Royal City — BeatOne Architecture Delta

## What BeatOne adds beyond LEGAX + LegaKeys

### 1. Executable BeatCore contract boundary

BeatOne provides a relatively compact, executable technical foundation that can serve as a bridge between the broader LEGAX/LegaKeys architecture and Royal City implementation.

### 2. DB-neutral repository contract

BeatOne explicitly separates:

`Domain Contract → Persistence Representation → Repository Boundary → Concrete Adapter`

This is highly valuable for Royal City because it prevents the first implementation from accidentally making a database vendor the domain authority.

### 3. Strong action/event/evidence transaction semantics

BeatOne demonstrates a concrete local transaction model where Action and its initial Event can be persisted atomically while external execution remains outside the local transaction.

### 4. External outcome normalization

BeatOne explicitly models ACCEPTED, REJECTED and UNKNOWN integration outcomes and reconciliation-required behavior.

This directly strengthens Royal City's existing integration architecture.

### 5. Production reconciliation discipline

BeatOne contains extensive reconciliation documents and physical persistence verification material.

These become methodological source material for Royal City production verification.

### 6. Kenya engineering/compliance material

BeatOne contains Kenya-specific launch/control architecture.

This can accelerate a later Royal City Kenya compliance workstream but does not automatically become universal Royal City policy.

## What is already covered elsewhere

BeatOne does not need to remain a separate architectural branch for:

- relationship theory;
- authorization principles;
- command/execution separation;
- intelligence boundaries;
- provider adapters;
- event/evidence semantics;
- workspace/application concepts.

Those already exist in the Royal City reconciliation from LEGAX and LegaKeys.

## Result

BeatOne primarily strengthens **implementation architecture and operational verification**, rather than adding another competing product/domain model.
